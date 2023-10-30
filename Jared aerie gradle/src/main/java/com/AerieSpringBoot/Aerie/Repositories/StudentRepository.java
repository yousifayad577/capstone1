// Data access layer.
// Does the job of talking to the database and retrieving the data.

package com.AerieSpringBoot.Aerie.Repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.AerieSpringBoot.Aerie.Students;


@Repository
public interface StudentRepository extends MongoRepository<Students, String> {

    // Find student by email
    Optional<Students> findByEmail(String email);

}
