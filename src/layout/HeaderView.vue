<template>
  <a-layout-header class="headerNav">
    <!-- sideBar switch Button -->
    <div>
      <ant-menu-outlined class="trigger" @click="switchDisplay()" />
    </div>

    <div class="headerButtonList">
      <!-- i18n Button-->

      <a-dropdown :trigger="['click']" arrow>
        <template #overlay>
          <a-menu>
            <a-menu-item
              v-for="item in langsList"
              :key="item.value"
              @click="changeLang(item.value)"
            >
              {{ item.text }}
            </a-menu-item>
          </a-menu>
        </template>
        <a-button class="headerButton" style="margin-right: 10px">
          <ant-message-filled />
          <span>{{ nowLang }}</span>
        </a-button>
      </a-dropdown>

      <!-- user Button -->

      <a-dropdown :trigger="['click']" arrow>
        <template #overlay>
          <a-menu>
            <a-menu-item key="1">
              <div class="menuItem">
                <ant-setting-outlined />
                <span>{{ $t('P00009') }}</span>
              </div>
            </a-menu-item>
            <a-menu-item key="2">
              <div class="menuItem">
                <ant-key-outlined />
                <span>{{ $t('P00010') }}</span>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
        <a-button class="headerButton">
          <ant-user-outlined />
          <span>Admin</span>
        </a-button>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { computed } from 'vue';
import { langsList, getNowLang, changeLang } from '@/composable/useLangs';
import { useSideBarStore } from '@/stores/sideBarStore';

export default {
  setup() {
    const store = useSideBarStore();
    const display = computed(() => store.display);
    const switchDisplay = () => store.switchDisplay();
    const nowLang = getNowLang();

    return {
      display,
      switchDisplay,
      langsList,
      nowLang,
      changeLang,
    };
  },
};
</script>
<style lang="sass" scoped>
.headerNav
  background: #fff !important
  padding-inline: 32px !important
  display: flex
  align-items: center
  justify-content: space-between

.headerButtonList
  display: flex

.headerButton
  display: flex
  align-items: center
  justify-content: space-between
  > svg
    margin-right: 5px

.menuItem
  display: flex
  align-items: center
  > svg
    margin-right: 5px
  > span
    margin: 0px 3px

.trigger:hover
  cursor: pointer
</style>
