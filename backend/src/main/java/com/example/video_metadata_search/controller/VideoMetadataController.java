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
    public List<VideoMetadata> searchVideos(@RequestParam(required = false) String query) {
        if (query == null || query.isEmpty()) {
            // Return all videos if no query is provided
            return service.getAllVideos();
        }
        return service.search(query);
    }
}
