package com.nocountry.equifit_app.model;

import jakarta.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;
    private Double height;
    private Double weight;
    private Discipline discipline;

    @ManyToOne
    private Product product;

}
