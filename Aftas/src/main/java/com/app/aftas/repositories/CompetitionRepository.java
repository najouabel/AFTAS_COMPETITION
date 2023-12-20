package com.app.aftas.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.aftas.models.Competition;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, String> {

     boolean existsByDate(LocalDate date);
     Page<Competition> findByDate(LocalDate date, Pageable pageable);
     Page<Competition> findByDateBefore(LocalDate date, Pageable pageable);
     Page<Competition> findByDateAfter(LocalDate date, Pageable pageable);
}
