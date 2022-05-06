<template>
  <el-card>
    <el-form label-width="80px">
      <el-form-item label="SPU名称">
        <span>AAA</span>
      </el-form-item>
      <el-form-item label="SKU名称">
        <el-input placeholder="请输入SKU名称" />
      </el-form-item>
      <el-form-item label="价格">
        <el-input-number
          v-model="num"
          style="width: 100%"
          controls-position="right"
          :min="0"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="重量">
        <el-input-number
          v-model="num"
          style="width: 100%"
          controls-position="right"
          :min="0"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="SKU描述">
        <el-input type="textarea" placeholder="请输入SKU描述" />
      </el-form-item>
      <el-form-item label="平台属性">
        <el-row>
          <el-col :md="8" :sm="12" :xs="24" class="el-sku-col">
            <el-form-item label="颜色">
              <el-select>
                <el-option value="aaa">aaa</el-option>
                <el-option value="bbb">bbb</el-option>
                <el-option value="ccc">ccc</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="8" :sm="12" :xs="24" class="el-sku-col">
            <el-form-item label="规格">
              <el-select>
                <el-option value="AAA">AAA</el-option>
                <el-option value="BBB">BBB</el-option>
                <el-option value="CCC">CCC</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="8" :sm="12" :xs="24" class="el-sku-col">
            <el-form-item label="尺寸">
              <el-select>
                <el-option value="7.0">7.0</el-option>
                <el-option value="8.0">8.0</el-option>
                <el-option value="9.0">9.0</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="8" :sm="12" :xs="24" class="el-sku-col">
            <el-form-item label="颜色">
              <el-select>
                <el-option value="aaa">aaa</el-option>
                <el-option value="bbb">bbb</el-option>
                <el-option value="ccc">ccc</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="8" :sm="12" :xs="24" class="el-sku-col">
            <el-form-item label="规格">
              <el-select>
                <el-option value="AAA">AAA</el-option>
                <el-option value="BBB">BBB</el-option>
                <el-option value="CCC">CCC</el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="销售属性">
        <el-row>
          <el-col :md="8" :sm="12" :xs="24" class="el-sku-col">
            <el-form-item label="颜色">
              <el-select>
                <el-option value="AAA">AAA</el-option>
                <el-option value="BBB">BBB</el-option>
                <el-option value="CCC">CCC</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="8" :sm="12" :xs="24" class="el-sku-col">
            <el-form-item label="尺寸">
              <el-select>
                <el-option value="AAA">AAA</el-option>
                <el-option value="BBB">BBB</el-option>
                <el-option value="CCC">CCC</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="8" :sm="12" :xs="24" class="el-sku-col">
            <el-form-item label="规格">
              <el-select>
                <el-option value="AAA">AAA</el-option>
                <el-option value="BBB">BBB</el-option>
                <el-option value="CCC">CCC</el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="SKU属性">
        <el-table
          ref="multipleTable"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column label="图片">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="名称" />
          <el-table-column prop="address" label="操作" show-overflow-tooltip />
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
