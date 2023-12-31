package com.app.aftas.controllers;

import com.app.aftas.dtos.Dto.FishDto;
import com.app.aftas.dtos.responseDto.FishDtoResponse;
import com.app.aftas.services.FishService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "api/fishes", produces = MediaType.APPLICATION_JSON_VALUE)
@Validated
public class FishController {

    @Autowired
    private FishService fishService;

    @PostMapping
    public ResponseEntity<FishDto> createFish(@Valid @RequestBody FishDto fishDto) {
        FishDto createdFish = fishService.save(fishDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdFish);
    }

    @GetMapping
    public ResponseEntity<List<FishDtoResponse>> getFishes() {
        List<FishDtoResponse> fishes = fishService.getAll();
        return ResponseEntity.ok(fishes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FishDtoResponse> findFishByID(@PathVariable String id) {
        FishDtoResponse fish = fishService.findByID(id);
        return ResponseEntity.ok(fish);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FishDto> updateFish(@PathVariable String id, @Valid @RequestBody FishDto fishDto) {
        FishDto updatedFish = fishService.update(id, fishDto);
        return ResponseEntity.ok(updatedFish);
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Map<String, String>> deleteFish(@PathVariable String name) {
        fishService.delete(name);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Fish deleted successfully.");
        response.put("deletedElementIdentifier", name);
        return new ResponseEntity<>(response ,HttpStatus.OK);
    }
}
