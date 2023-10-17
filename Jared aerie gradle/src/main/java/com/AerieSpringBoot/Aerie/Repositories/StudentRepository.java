// Data access layer.
// Does the job of talking to the database and retrieving the data.

package com.AerieSpringBoot.Aerie.Repositories;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.AerieSpringBoot.Aerie.Students;

@Repository
public interface StudentRepository extends MongoRepository<Students, ObjectId> {
    Optional<Students> findStudentByName(String name);
}
