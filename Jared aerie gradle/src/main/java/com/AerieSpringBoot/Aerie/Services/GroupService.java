package com.AerieSpringBoot.Aerie.Services;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AerieSpringBoot.Aerie.Groups;
import com.AerieSpringBoot.Aerie.Repositories.GroupRepository;

@Service
public class GroupService {
    @Autowired
    private GroupRepository groupRepository;

    public List<Groups> getAllGroups() {
        return groupRepository.findAll();
    }

    public Optional<Groups> getSingleGroup(ObjectId id) {
        return groupRepository.findById(id);
    }

    // Add more methods for group-related business logic as needed
}
