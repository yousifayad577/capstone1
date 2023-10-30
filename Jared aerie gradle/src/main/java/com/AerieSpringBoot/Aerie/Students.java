package com.AerieSpringBoot.Aerie;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "Student")
@Data // Handles the Getters & Setters (comes from Lombok)
// @AllArgsConstructor // Handles the constructor with parameters
// @NoArgsConstructor // Handles the constructor without parameters
public class Students {
    
    @Id
    private String _id;
    private String first_name;
    private String last_name;
    private String email;
    private String major;

    public Students() {}

    public Students(String first_name, String last_name, String email, String major) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.major = major;
    }

    public Students(String _id, String first_name, String last_name, String email, String major) {
        this._id = _id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.major = major;
    }
}
