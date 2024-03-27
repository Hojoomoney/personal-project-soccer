package com.rod.api.product;

import com.rod.api.common.BaseEntity;
import com.rod.api.common.Domain;
import com.rod.api.order.Order;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.domain.Persistable;

import java.util.List;

@Entity(name="products")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString
public class Product extends BaseEntity implements Persistable<String> {
    @Column
    private Integer pno;
    @Column
    private String name;
    @Column
    private String company;
    @Column
    private Integer price;
    @OneToMany(mappedBy = "product")
    private List<Order> orders;

    @Builder(builderMethodName = "builder")
    public Product(int pno, String name, String company, int price) {
        super(Domain.Product);
        this.pno = pno;
        this.name = name;
        this.company = company;
        this.price = price;
    }

    @Override
    public boolean isNew() {
        return super.getCreateAt()==null;
    }
}
