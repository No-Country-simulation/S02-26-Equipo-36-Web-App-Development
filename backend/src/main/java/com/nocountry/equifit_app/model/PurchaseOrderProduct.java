package com.nocountry.equifit_app.model;

import jakarta.persistence.*;

public class PurchaseOrderProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private Double individualAmount;
    private int number;

    @ManyToOne
    private PurchaseOrder purchaseOrder;

    @ManyToOne
    private Product product;
}
