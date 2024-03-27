package com.rod.api.user;

import com.rod.api.common.BaseEntity;
import com.rod.api.common.Domain;
import com.rod.api.order.Order;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.domain.Persistable;

import java.util.List;
import java.util.UUID;

@Entity(name="users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString
public class User extends BaseEntity {
    @Column
    private String username;
    @Column
    private String password;
    @Column
    private String name;
    @Column
    private String phone;
    @Column
    private String email;
    @Column
    private String job;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @Builder(builderMethodName = "builder")
    public User(String username, String password, String name, String phone, String email, String job) {
        super(Domain.User);
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.job = job;
    }

}

