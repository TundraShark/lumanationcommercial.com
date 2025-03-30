<template>
  <div class="p-float-label custom-dropdown" v-click-outside="closeDropdown">
    <div class="p-inputtext w-full dropdown-input" @click="toggleDropdown">
      <span v-if="modelValue">{{ getOptionLabel(modelValue) }}</span>
      <span v-else class="placeholder"></span>
      <span class="dropdown-icon" :class="{ 'open': isOpen }">▼</span>
    </div>
    <label :class="{ 'has-value': modelValue }">{{ label }}</label>
    <div class="dropdown-menu" v-if="isOpen">
      <div class="dropdown-search" v-if="searchable">
        <input 
          type="text" 
          class="p-inputtext w-full" 
          v-model="searchQuery" 
          placeholder="Search"
          @click.stop
        >
      </div>
      <div class="dropdown-options">
        <div
          v-for="option in filteredOptions"
          :key="getOptionValue(option)"
          class="dropdown-option"
          @click="selectOption(option)"
        >
          {{ getOptionLabel(option) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

// Define props
const props = defineProps({
  modelValue: {
    type: [Object, String, Number],
    default: null
  },
  options: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  optionLabel: {
    type: String,
    default: "name"
  },
  optionValue: {
    type: String,
    default: "code"
  },
  searchable: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  }
});

// Define emits
const emit = defineEmits(["update:modelValue"]);

// Component state
const isOpen = ref(false);
const searchQuery = ref("");

// Click outside directive
const vClickOutsideDirective = {
  beforeMount(el: HTMLElement & { _clickOutside?: any }, binding: { value: (event: MouseEvent) => void }) {
    el._clickOutside = (event: MouseEvent) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event);
      }
    };
    document.addEventListener("click", el._clickOutside);
  },
  unmounted(el: HTMLElement & { _clickOutside?: any }) {
    document.removeEventListener("click", el._clickOutside);
  }
};

const vClickOutside = vClickOutsideDirective;

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const selectOption = (option: any) => {
  emit("update:modelValue", option);
  closeDropdown();
};

const getOptionLabel = (option: any): string => {
  if (!option) return "";
  if (typeof option === "string" || typeof option === "number") return String(option);
  return option[props.optionLabel] || "";
};

const getOptionValue = (option: any): string => {
  if (!option) return "";
  if (typeof option === "string" || typeof option === "number") return String(option);
  return option[props.optionValue] || "";
};

// Computed properties
const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options;
  
  return props.options.filter((option: any) => {
    const label = getOptionLabel(option).toLowerCase();
    return label.includes(searchQuery.value.toLowerCase());
  });
});

// Reset search when dropdown closes
watch(isOpen, (newValue) => {
  if (!newValue) {
    searchQuery.value = "";
  }
});
</script>

<style scoped lang="scss">
.custom-dropdown {
  position: relative;

  .dropdown-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: 40px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 0.75rem;
    background-color: #fff;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;

    &:hover {
      border-color: var(--accent-1, #2196f3);
    }

    &:focus,
    &:active {
      outline: none;
      border-color: var(--accent-1, #2196f3);
      box-shadow: 0 0 0 2px rgba(37, 52, 114, 0.2);
    }

    .placeholder {
      color: transparent;
    }

    .dropdown-icon {
      transition: transform 0.3s;
      font-size: 0.75rem;
      margin-left: 0.5rem;
      color: var(--primary-3, #495057);

      &.open {
        transform: rotate(180deg);
      }
    }
  }

  label {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 0.2s ease all;
    color: var(--primary-3, #495057);
    margin: 0;
    background-color: transparent;
    padding: 0 0.25rem;
    z-index: 1;
    font-family: "RobotoFlex", sans-serif;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    overflow-y: auto;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    margin-top: 4px;

    .dropdown-search {
      padding: 0.5rem;
      border-bottom: 1px solid #e9ecef;

      input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ced4da;
        border-radius: 4px;
        font-size: 0.875rem;

        &:focus {
          outline: none;
          border-color: var(--accent-1, #2196f3);
          box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.25);
        }
      }
    }

    .dropdown-options {
      max-height: 200px;
      overflow-y: auto;

      .dropdown-option {
        padding: 0.625rem 0.75rem;
        cursor: pointer;
        transition: background-color 0.15s;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: "RobotoFlex", sans-serif;
        color: var(--primary-3, #495057);

        &:hover {
          background-color: rgba(37, 52, 114, 0.08);
          color: var(--accent-1, #2196f3);
        }
      }
    }
  }

  label.has-value {
    top: 0;
    transform: translateY(-50%) scale(0.85);
    background-color: white;
    color: var(--accent-1, #2196f3);
    z-index: 1;
  }
}
</style>
