package com.app.aftas.models;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
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
@Table(name = "competitions")
public class Competition {
    
    @NotEmpty(message = "Competition code is required.")
    @Id
    private String code;

    @NotNull(message = "Competition date must not be null")
    @Column(columnDefinition = "DATE DEFAULT CURRENT_DATE", unique = true)
    private LocalDate date;

    @NotNull(message = "Competition start time must not be null")
    private LocalDateTime startTime;

    @NotNull(message = "Competition end time must not be null")
    private LocalDateTime endTime;
    private Integer numberOfParticipants;

    @NotEmpty(message = "Competition location is required")
    private String location;

    @NotNull
    private Double amount;

    @OneToMany(mappedBy = "competition", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ranking> rankings;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "competition", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Hunting> huntings;
}
