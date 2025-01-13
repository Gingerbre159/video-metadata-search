package com.example.video_metadata_search.repository;

import com.example.video_metadata_search.model.VideoMetadata;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VideoMetadataRepository extends JpaRepository<VideoMetadata, Long> {
    List<VideoMetadata> findByTitleContainingIgnoreCaseOrTagsContainingIgnoreCase(String title, String tags);
}
