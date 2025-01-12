package com.example.video_metadata_search.controller;

import com.example.video_metadata_search.model.VideoMetadata;
import com.example.video_metadata_search.service.VideoMetadataService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/videos")
public class VideoMetadataController {
    private final VideoMetadataService service;

    public VideoMetadataController(VideoMetadataService service) {
        this.service = service;
    }

    @PostMapping
    public VideoMetadata addVideoMetadata(@RequestBody VideoMetadata metadata) {
        return service.save(metadata);
    }

    @GetMapping
    public List<VideoMetadata> searchVideos(@RequestParam String query) {
        return service.search(query);
    }
}
