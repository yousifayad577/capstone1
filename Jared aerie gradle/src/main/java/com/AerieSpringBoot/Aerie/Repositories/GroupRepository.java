package com.AerieSpringBoot.Aerie.Repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.AerieSpringBoot.Aerie.Groups;

@Repository
public interface GroupRepository extends MongoRepository<Groups, ObjectId> {

    // You can add custom query methods here if needed
    // For example, if you want to find a group by a specific field.
}
