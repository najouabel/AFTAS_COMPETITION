package com.app.aftas.repositories;

import com.app.aftas.models.Level;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LevelRepository extends JpaRepository<Level, Integer> {

    Optional<Level> findFirstByOrderByCodeDesc();
}
