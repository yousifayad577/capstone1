// The Service class is were most of the business logic will go.
// Uses the repository class to talk to the database and get the data and returns it to the API.

package com.AerieSpringBoot.Aerie.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.AerieSpringBoot.Aerie.Students;
import com.AerieSpringBoot.Aerie.Auth.JwtTokenProvider;
import com.AerieSpringBoot.Aerie.Repositories.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    // Constructor
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // ********** GET ALL STUDENTS **********
    public List<Students> getStudents() {
        return studentRepository.findAll();
    }

    // ********** FIND STUDENT **********
    public Students getStudent(String body) {
        // Check if email exist
        Optional<Students> studentOptional = studentRepository.findByEmail(body);
        System.out.println(studentOptional.get());

        return studentOptional.get();
    }

    // ********** LOGIN STUDENT **********
    public String loginStudent(String email, String password) {
        Students student = studentRepository.findByEmail(email)
                            .orElseThrow(() -> new UserNotFoundException("Student not found"));

        if (!passwordEncoder.matches(password, student.getPassword())) {
            throw new InvalidPasswordException("Invalid Password");
        }

        return jwtTokenProvider.createToken(email);
    }

    // ********** ADD NEW STUDENT **********
    public Students addNewStudent(Students student) {
        // Check if email is already exists
        Optional<Students> studentOptional = studentRepository.findByEmail(student.getEmail());
        
        // Throw error is email already exist
        if(studentOptional.isPresent()) {
            throw new IllegalStateException("Email already exists!");
        }

        // Save new student to database
        return studentRepository.save(student);
    }

    // ********** DELETE STUDENT **********
    public void deleteStudent(String studentId) {
        // Verify that student id exist
        boolean exists = studentRepository.existsById(studentId);
        if(!exists) {
            throw new IllegalStateException("Student with id " + studentId + " does not exist!");
        }

        // Delete student by id
        studentRepository.deleteById(studentId);
    }

    // ********** UPDATE STUDENT INFORMATION **********
    public void updateStudent(
            String studentId, 
            String first_name, 
            String last_name, 
            String email, 
            String major,
            String password) {
        
        // Get student info by id
        Students student = studentRepository.findById(studentId)
                .orElseThrow(() -> new IllegalStateException("Student with id " + studentId + " does not exist!"));

        // Verify and set new first name
        if((first_name != null) && (first_name.length() > 0) && (!student.getFirst_name().equals(first_name))) {
            student.setFirst_name(first_name);
            System.out.println(student.getFirst_name());
        }
        // Verify and set new last name
        if((last_name != null) && (last_name.length() > 0) && (!student.getLast_name().equals(last_name))) {
            student.setLast_name(last_name);
        }
        // Verify and set new email
        if((email != null) && (email.length() > 0) && (!student.getEmail().equals(email))) {
            // Check if new email is not taken
            Optional<Students> studentOptional = studentRepository.findByEmail(email);
            if(studentOptional.isPresent()) {
                throw new IllegalStateException("Email is taken!");
            }
            
            student.setEmail(email);
            System.out.println(student.getEmail());
        }
        // Verify and set new major
        if((major != null) && (major.length() > 0) && (!student.getMajor().equals(major))) {
            student.setMajor(major);
        }
        // Verify and set new password
        if((password != null) && (password.length() > 0) && (!student.getPassword().equals(password))) {
            student.setPassword(password);
        }

        // Save new student data
        studentRepository.save(student);
    }
}
