package com.rod.api.common;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
@Getter
@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
public class BaseEntity {
    @Id
    @Column(name = "id", updatable = false, unique = true, nullable = false, length = 50)
    private String id;
    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createAt;
    @LastModifiedDate
    private LocalDate updateAt;
    public BaseEntity()    {
    }
    public BaseEntity(Domain domain) {
        this.id = domain.toString().toLowerCase() + "_" + UUID.randomUUID().toString().replace("-", "");
    }
}
