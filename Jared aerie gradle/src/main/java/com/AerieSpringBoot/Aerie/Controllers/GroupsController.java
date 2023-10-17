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

import com.AerieSpringBoot.Aerie.Groups;
import com.AerieSpringBoot.Aerie.Services.GroupService;

@RestController
@RequestMapping("/api/v1/groups")
public class GroupsController {
    @Autowired
    private GroupService groupService;

    // Endpoint to get all groups
    @GetMapping()
    public ResponseEntity<List<Groups>> getAllGroups() {
        List<Groups> groups = groupService.getAllGroups();
        return new ResponseEntity<>(groups, HttpStatus.OK);
    }

    // Endpoint to get a single group by its ID
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Groups>> getSingleGroup(@PathVariable String id) {
        ObjectId objectId = new ObjectId(id);
        Optional<Groups> group = groupService.getSingleGroup(objectId);
        return new ResponseEntity<>(group, HttpStatus.OK);
    }
}
