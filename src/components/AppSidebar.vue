<script setup>
import { RouterLink } from 'vue-router'

import { logo } from '@/assets/brand/logo'
import { sygnet } from '@/assets/brand/sygnet'
import { AppSidebarNav } from '@/components/AppSidebarNav.js'
import { useSidebarStore } from '@/stores/sidebar.js'

const sidebar = useSidebarStore()
</script>

<template>
  <CSidebar
    class="border-end"
    colorScheme="dark"
    position="fixed"
    :unfoldable="sidebar.unfoldable"
    :visible="sidebar.visible"
    @visible-change="(value) => sidebar.toggleVisible(value)"
  >
    <CSidebarHeader class="border-bottom">
      <CSidebarBrand>CoreUI</CSidebarBrand>
    </CSidebarHeader>
    <CSidebarNav>
      <CNavTitle>Nav Title</CNavTitle>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon="cil-speedometer" /> Nav item
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon="cil-speedometer" /> With badge
        <CBadge class="ms-auto" color="primary">NEW</CBadge>
      </CNavItem>
      <CNavGroup>
        <template #togglerContent>
          <CIcon customClassName="nav-icon" icon="cil-puzzle" /> Nav dropdown
        </template>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
        </CNavItem>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
        </CNavItem>
      </CNavGroup>
      <CNavGroup>
        <template #togglerContent>
          <CIcon customClassName="nav-icon" icon="cil-puzzle" /> Nav dropdown2
        </template>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
        </CNavItem>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
        </CNavItem>
      </CNavGroup>
      <CNavItem href="https://coreui.io">
        <CIcon customClassName="nav-icon" icon="cil-cloud-download" /> Download CoreUI
      </CNavItem>
      <CNavItem href="https://coreui.io/pro/">
        <CIcon customClassName="nav-icon" icon="cil-layers" /> Try CoreUI PRO
      </CNavItem>
    </CSidebarNav>
    <CSidebarFooter class="border-top">
      <CSidebarToggler />
    </CSidebarFooter>
  </CSidebar>
</template>
