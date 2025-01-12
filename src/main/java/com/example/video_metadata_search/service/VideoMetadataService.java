package com.example.video_metadata_search.service;

import com.example.video_metadata_search.model.VideoMetadata;
import com.example.video_metadata_search.repository.VideoMetadataRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoMetadataService {
    private final VideoMetadataRepository repository;

    public VideoMetadataService(VideoMetadataRepository repository) {
        this.repository = repository;
    }

    public VideoMetadata save(VideoMetadata metadata) {
        return repository.save(metadata);
    }

    public List<VideoMetadata> search(String query) {
        return repository.findByTitleContainingIgnoreCaseOrTagsContainingIgnoreCase(query, query);
    }
}
