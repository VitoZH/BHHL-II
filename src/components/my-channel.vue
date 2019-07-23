<template>
  <div>
    <el-select :value="value" @change="fn" placeholder="请选择" size="small">
      <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'my-channel',
  props: ['value'],
  data () {
    return {
      options: []
    }
  },
  created () {
    this.getChannelOptions()
  },
  methods: {
    fn (value) {
      this.$emit('input', value)
    },
    // 获取频道数据
    async getChannelOptions () {
      const {
        data: { data }
      } = await this.$http.get('channels')
      this.options = data.channels
    }
  }
}
</script>

<style>
</style>
