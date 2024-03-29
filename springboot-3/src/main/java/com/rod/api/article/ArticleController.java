package com.rod.api.article;

import com.rod.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class ArticleController {
    private final ArticleService articleService;
    @GetMapping("/api/all-articles")
    public Map<?,?> findAll() {
        Map<String, Object> map = new HashMap<>();
        map.put("message", Messenger.SUCCESS);
        List<Article> list = (List<Article>) articleService.findAll();
        map.put("result", list);
//        map.put("result", Article.builder()
//                        .id((1L))
//                        .title("제목")
//                        .content("내용")
//                        .registerDate(LocalDateTime.now())
//                        .build());
        return map;
    }
}
