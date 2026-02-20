package com.nocountry.equifit_app.model;

import jakarta.persistence.*;

@Entity
public class Discipline {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true ,nullable = false)
    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    private SkillLevel skillLevel;
}
