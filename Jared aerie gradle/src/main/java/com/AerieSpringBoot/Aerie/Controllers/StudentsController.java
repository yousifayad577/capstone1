// // API layer that only concerns itself about the task taking a request from the user and returning a response.
// // Uses the Service class and deligating the process of retrieving all of the data and bringing it back to the API layer.

// package com.AerieSpringBoot.Aerie.Controllers;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;

// import com.AerieSpringBoot.Aerie.Students;
// import com.AerieSpringBoot.Aerie.Security.JwtTokenProvider;
// import com.AerieSpringBoot.Aerie.Services.StudentService;

// @CrossOrigin(origins = "*")
// @RequestMapping("/api/v1/Student")
// public class StudentsController {
    
//     @Autowired
//     private StudentService studentService;

//     @Autowired
//     private JwtTokenProvider jwtTokenProvider;

//     // Constructor
//     public StudentsController(StudentService studentService) {
//         this.studentService = studentService;
//     }

//     // @GetMapping
//     // public List<Students> getStudents() {
//     //     return studentService.getStudents();
//     // }
//     @GetMapping
//     public ResponseEntity<List<Students>> getStudents() {
//         return new ResponseEntity<List<Students>>(studentService.getStudents(), HttpStatus.OK);
//     }

//     @PostMapping
//     public void registerNewStudent(@RequestBody Students student) {
//         studentService.addNewStudent(student);
//     }


//     @DeleteMapping(path = "{studentId}")
//     public void deleteStudent(@PathVariable("studentId") String studentId) {
//         studentService.deleteStudent(studentId);
//     }

//     @PutMapping(path = "{studentId}")
//     public void updateStudent(
//             @PathVariable("studentId") String studentId,
//             @RequestParam(required = false) String first_name,
//             @RequestParam(required = false) String last_name,
//             @RequestParam(required = false) String email,
//             @RequestParam(required = false) String major,
//             @RequestParam(required = false) String password) {

//         studentService.updateStudent(studentId, first_name, last_name, email, major, password);
//     }
// }
