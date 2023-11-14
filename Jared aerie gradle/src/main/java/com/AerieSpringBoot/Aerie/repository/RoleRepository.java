package com.AerieSpringBoot.Aerie.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.AerieSpringBoot.Aerie.models.ERole;
import com.AerieSpringBoot.Aerie.models.Role;

public interface RoleRepository extends MongoRepository<Role, Long>{
    Optional<Role> findByName(ERole name);
}
