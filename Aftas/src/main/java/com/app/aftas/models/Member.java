package com.app.aftas.models;

import java.time.LocalDate;
import java.util.List;

import com.app.aftas.models.enums.IdentityDocumentType;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name= "members")
public class Member {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer num;

    @NotEmpty(message = "Member name is required.")
    private String name;

    @NotEmpty(message = "Member family name is required.")
    private String familyName;

    private LocalDate accessionDate;

    @NotEmpty(message = "Member nationality is required")
    private String nationality;


    @Enumerated(EnumType.STRING)
    private IdentityDocumentType identityDocument;

    @NotEmpty(message = "Member identity number is required.")
    private String identityNumber;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ranking> rankings;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Hunting> huntings;
}
