package com.rod.api.order;

import com.rod.api.common.BaseEntity;
import com.rod.api.common.Domain;
import com.rod.api.product.Product;
import com.rod.api.user.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.domain.Persistable;

import java.time.LocalDateTime;

@Table(name = "orders")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString
@Entity
public class Order extends BaseEntity implements Persistable<String> {

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column
    private Integer orderAmount;

    @Column
    private LocalDateTime orderDate;

    @Builder(builderMethodName = "builder")
    public Order(User user, Product product, Integer orderAmount, LocalDateTime orderDate) {
        super(Domain.Order);
        this.user = user;
        this.product = product;
        this.orderAmount = orderAmount;
        this.orderDate = orderDate;
    }

    @Override
    public boolean isNew() {
        return super.getCreateAt()==null;
    }
}
