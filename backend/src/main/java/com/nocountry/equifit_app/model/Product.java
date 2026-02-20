package com.nocountry.equifit_app.model;

import jakarta.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;
    private String model;
    private String description;
    private Double price;
    private Discipline discipline;

    @Enumerated(EnumType.STRING)
    private ProductType type;


}
