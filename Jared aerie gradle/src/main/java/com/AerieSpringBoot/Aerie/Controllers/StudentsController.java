// API layer that only concerns itself about the task taking a request from the user and returning a response.
// Uses the Service class and deligating the process of retrieving all of the data and bringing it back to the API layer.

package com.AerieSpringBoot.Aerie.Controllers;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AerieSpringBoot.Aerie.Students;
import com.AerieSpringBoot.Aerie.Services.StudentService;

@RestController
@RequestMapping("/api/v1/students")
public class StudentsController {
    @Autowired
    private StudentService studentService;

    @GetMapping()
    public ResponseEntity<List<Students>> getAllStudents() {
        return new ResponseEntity<List<Students>>(studentService.getAllStudents(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Students>> getSingleStudent(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Students>>(studentService.getSingleStudent(id), HttpStatus.OK);
    }
    
}
