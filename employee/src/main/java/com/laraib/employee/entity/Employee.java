package com.laraib.employee.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import jakarta.validation.constraints.NotNull;

@Entity
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Name is mandatory")
    private String name;

    @NotNull(message = "Email is mandatory")
    private  String email;

    @NotNull(message = "Phone number is mandatory")
    private  String phone;

    @NotNull(message = "Department is mandatory")
    private  String department;
}
