package com.app.aftas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@SpringBootApplication
public class AftasApplication {

    public static void main(String[] args) {
        SpringApplication.run(AftasApplication.class, args);
    }


}
