package com.veezean.codereview.server.model;

import com.veezean.codereview.server.entity.DictCollectionEntity;
import lombok.Data;

import javax.persistence.ManyToOne;

/**
 * <类功能简要描述>
 *
 * @author Veezean
 * @since 2023/3/24
 */
@Data
public class SaveDictItemReqBody {
    private String value;
    private String showName;
    private String itemDesc;
    private int sort;
    private String collectionCode;
}
