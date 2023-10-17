package com.AerieSpringBoot.Aerie;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "students")
@Data // Handles the Getters & Setters (comes from Lombok)
@AllArgsConstructor // Handles the constructor with parameters
@NoArgsConstructor // Handles the constructor without parameters
public class Students {
    @Id
    private ObjectId id;
    private String name;
    private String major;
}
