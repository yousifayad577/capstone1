// The Service class is were most of the business logic will go.
// Uses the repository class to talk to the database and get the data and returns it to the API.

package com.AerieSpringBoot.Aerie.Services;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AerieSpringBoot.Aerie.Students;
import com.AerieSpringBoot.Aerie.Repositories.StudentRepository;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Students> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Students> getSingleStudent(ObjectId id) {
        return studentRepository.findById(id);
    }
}
