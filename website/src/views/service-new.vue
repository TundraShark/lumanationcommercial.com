<template>
  <div class="services">
    <div class="hero-banner">
      <div class="overlay">
        <div class="container">
          <!-- <h1>PLACEHOLDER</h1> -->
          <p>We are a full service electrical contracting company, offering competitive rates for new construction, service, maintenance, and repair, offering rapid response times by our reliable and knowledgeable electricians. Contact us today for any of your electrical needs.</p>
        </div>
      </div>
    </div>

    <div class="form-container">
      <div class="form-header">
        <h2>Request Service</h2>
        <p>Fill out the form below to request service or schedule maintenance for your facility</p>
      </div>
      <div class="container">
        <div class="card flex justify-center">
          <!-- <Toast /> -->

          <div class="service-form w-full">
            <div class="form-section">
              <h3 class="section-title">Contact Details</h3>

              <div class="form-row">
                <div class="field-wrapper half-width">
                  <div class="p-float-label">
                    <input id="firstName" type="text" class="p-inputtext w-full" v-model="formData.firstName" placeholder=" ">
                    <label for="firstName">First Name</label>
                  </div>
                  <div v-if="formErrors.firstName" class="error-message">{{ formErrors.firstName }}</div>
                </div>

                <div class="field-wrapper half-width">
                  <div class="p-float-label">
                    <input id="lastName" type="text" class="p-inputtext w-full" v-model="formData.lastName" placeholder=" ">
                    <label for="lastName">Last Name</label>
                  </div>
                  <div v-if="formErrors.lastName" class="error-message">{{ formErrors.lastName }}</div>
                </div>
              </div>

              <div class="form-row">
                <div class="field-wrapper half-width">
                  <div class="p-float-label">
                    <input id="email" type="email" class="p-inputtext w-full" v-model="formData.email" placeholder=" ">
                    <label for="email">Email</label>
                  </div>
                  <div v-if="formErrors.email" class="error-message">{{ formErrors.email }}</div>
                </div>

                <div class="field-wrapper half-width">
                  <div class="p-float-label">
                    <input
                      id="phone"
                      type="tel"
                      class="p-inputtext w-full"
                      v-model="formData.phone"
                      @focus="setupPhoneMask"
                      @input="formatPhoneNumber"
                      placeholder=" "
                      autocomplete="tel"
                      inputmode="numeric"
                    >
                    <label for="phone">Phone Number</label>
                  </div>
                  <div v-if="formErrors.phone" class="error-message">{{ formErrors.phone }}</div>
                </div>
              </div>

              <div class="field-wrapper">
                <div class="p-float-label">
                  <input id="companyName" type="text" class="p-inputtext w-full" v-model="formData.companyName" placeholder=" ">
                  <label for="companyName">Company Name</label>
                </div>
                <div v-if="formErrors.companyName" class="error-message">{{ formErrors.companyName }}</div>
              </div>
            </div>

            <div class="form-section">
              <h3 class="section-title">Address</h3>
              <div class="field-wrapper">
                <div class="p-float-label">
                  <input id="street" type="text" class="p-inputtext w-full" v-model="formData.street" placeholder=" ">
                  <label for="street">Street</label>
                </div>
                <div v-if="formErrors.street" class="error-message">{{ formErrors.street }}</div>
              </div>

              <div class="form-row">
                <div class="field-wrapper city">
                  <div class="p-float-label">
                    <input id="city" type="text" class="p-inputtext w-full" v-model="formData.city" placeholder=" ">
                    <label for="city">City</label>
                  </div>
                  <div v-if="formErrors.city" class="error-message">{{ formErrors.city }}</div>
                </div>

                <div class="field-wrapper state">
                  <div class="p-float-label custom-dropdown" v-click-outside="closeStateDropdown">
                    <div class="p-inputtext w-full dropdown-input" @click="toggleStateDropdown">
                      <span v-if="formData.state">{{ getStateLabel(formData.state) }}</span>
                      <span v-else class="placeholder"></span>
                      <span class="dropdown-icon" :class="{ 'open': stateDropdownOpen }">▼</span>
                    </div>
                    <label :class="{ 'has-value': formData.state }">State</label>
                    <div class="dropdown-menu" v-if="stateDropdownOpen">
                      <div class="dropdown-search">
                        <input type="text" class="p-inputtext w-full" v-model="stateSearchQuery" placeholder="Search">
                      </div>
                      <div class="dropdown-options">
                        <div
                          v-for="state in filteredStates"
                          :key="state.value"
                          class="dropdown-option"
                          @click="selectState(state)"
                        >
                          {{ state.label }}
                        </div>
                      </div>
                    </div>
                    <div v-if="formErrors.state" class="error-message">{{ formErrors.state }}</div>
                  </div>
                </div>

                <div class="field-wrapper zip">
                  <div class="p-float-label">
                    <input
                      id="zipCode"
                      type="text"
                      class="p-inputtext w-full"
                      v-model="formData.zipCode"
                      @focus="setupZipCodeMask"
                      @input="formatZipCode"
                      placeholder=" "
                      maxlength="5"
                      pattern="[0-9]{5}"
                      autocomplete="postal-code"
                      inputmode="numeric"
                      :class="{ 'p-filled': formData.zipCode }"
                    >
                    <label for="zipCode">Zip Code</label>
                  </div>
                  <div v-if="formErrors.zipCode" class="error-message">{{ formErrors.zipCode }}</div>
                </div>
              </div>
            </div>

            <div class="form-section">
              <h3 class="section-title">Service Details</h3>
              <div class="field-wrapper">
                <div class="p-float-label">
                  <textarea
                    id="serviceDetails"
                    class="p-inputtext w-full"
                    v-model="formData.serviceDetails"
                    rows="5"
                    placeholder=" "
                    :class="{ 'p-filled': formData.serviceDetails }"
                  ></textarea>
                  <label for="serviceDetails">Please provide as much information as you can</label>
                </div>
                <div v-if="formErrors.serviceDetails" class="error-message">{{ formErrors.serviceDetails }}</div>
              </div>
              <div class="field-wrapper">
                <h4 class="field-subtitle">Which day would be best for an assessment of the work?</h4>
                <div class="calendar-container">
                  <Calendar
                    id="assessmentDate"
                    v-model="formData.assessmentDate"
                    :showIcon="true"
                    dateFormat="mm/dd/yy"
                    monthNavigator
                    yearNavigator
                    yearRange="2025:2030"
                    class="w-full"
                    :minDate="minDate"
                    inputId="assessment-date-input"
                  />
                </div>
                <div v-if="formErrors.assessmentDate" class="error-message">{{ formErrors.assessmentDate }}</div>
              </div>
              <div class="field-wrapper">
                <h4 class="field-subtitle">What is another day that works for you?</h4>
                <div class="calendar-container">
                  <Calendar
                    id="alternateDate"
                    v-model="formData.alternateDate"
                    :showIcon="true"
                    dateFormat="mm/dd/yy"
                    monthNavigator
                    yearNavigator
                    yearRange="2025:2030"
                    class="w-full"
                    :minDate="minDate"
                    inputId="alternate-date-input"
                  />
                </div>
                <div v-if="formErrors.alternateDate" class="error-message">{{ formErrors.alternateDate }}</div>
              </div>
              <div class="field-wrapper">
                <h4 class="field-subtitle">What are your preferred arrival times?</h4>
                <div class="checkbox-group">
                  <div class="checkbox-item">
                    <Checkbox
                      v-model="formData.preferredTimes"
                      value="Anytime"
                      inputId="anytime"
                      @change="handleAnytimeChange"
                    />
                    <label for="anytime" class="checkbox-label">Anytime</label>
                  </div>
                  <div class="checkbox-item">
                    <Checkbox
                      v-model="formData.preferredTimes"
                      value="Morning"
                      inputId="morning"
                      @change="handleSpecificTimeChange"
                    />
                    <label for="morning" class="checkbox-label">Morning</label>
                  </div>
                  <div class="checkbox-item">
                    <Checkbox
                      v-model="formData.preferredTimes"
                      value="Afternoon"
                      inputId="afternoon"
                      @change="handleSpecificTimeChange"
                    />
                    <label for="afternoon" class="checkbox-label">Afternoon</label>
                  </div>
                  <div class="checkbox-item">
                    <Checkbox
                      v-model="formData.preferredTimes"
                      value="Evening"
                      inputId="evening"
                      @change="handleSpecificTimeChange"
                    />
                    <label for="evening" class="checkbox-label">Evening</label>
                  </div>
                </div>
                <div v-if="formErrors.preferredTimes" class="error-message">{{ formErrors.preferredTimes }}</div>
              </div>
              <div class="field-wrapper">
                <h4 class="field-subtitle">Upload images</h4>
                <div
                  class="custom-dropzone"
                  @dragover.prevent="onDragOver"
                  @dragleave.prevent="onDragLeave"
                  @drop.prevent="onDrop"
                  :class="{ 'drag-over': isDragging }"
                  @click="triggerFileInput"
                >
                  <input
                    type="file"
                    ref="fileInputRef"
                    multiple
                    accept="image/*"
                    class="file-input"
                    @change="onFileInputChange"
                  />
                  <div class="dropzone-content">
                    <i class="pi pi-upload"></i>
                    <p>Drag images here or click to browse</p>
                    <p class="file-hint">Supported formats: JPG, PNG, GIF (Max 5MB per file)</p>
                  </div>
                </div>
                <p class="upload-disclaimer">Share images of the work to be done. Do not upload files with payment information, and ensure you have all required rights, consent and permissions to share.</p>
                <p class="upload-disclaimer">By providing your email, you consent to receiving marketing emails and promotions. You can unsubscribe at any time.</p>
                <p class="upload-disclaimer">By providing your phone number, you agree to receive text messages (SMS) from LumaNation Electric. You can unsubscribe at anytime by replying STOP. Message and data rates may apply. Message frequency varies.</p>
                <div class="selected-files" v-if="formData.uploadedFiles.length > 0">
                  <h5>Selected Images ({{ formData.uploadedFiles.length }})</h5>
                  <ul class="file-list">
                    <li v-for="(file, index) in formData.uploadedFiles" :key="index" class="file-item">
                      <span class="file-name">{{ file.name }}</span>
                      <span class="file-size">({{ formatFileSize(file.size) }})</span>
                      <button type="button" class="remove-file" @click="removeFile(index)">×</button>
                    </li>
                  </ul>
                </div>
                <div v-if="invalidFileWarnings.length > 0" class="file-warnings">
                  <div class="warning-header">
                    <i class="pi pi-exclamation-triangle"></i>
                    <span>The following files could not be uploaded:</span>
                  </div>
                  <ul class="warning-list">
                    <li v-for="(warning, index) in invalidFileWarnings" :key="index" class="warning-item">
                      <span class="warning-filename">{{ warning.name }}</span>
                      <span class="warning-reason">{{ warning.reason }}</span>
                    </li>
                  </ul>
                  <button type="button" class="dismiss-warnings" @click="clearFileWarnings">Dismiss</button>
                </div>
                <div v-if="formErrors.uploadedFiles" class="error-message">{{ formErrors.uploadedFiles }}</div>
              </div>
            </div>

            <button type="button" class="submit-button" @click="submitForm">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <ServiceContent />

    <!-- <div class="content">
      <div class="container">
        <div class="service-intro">
          <h2>Dedicated to Your Service Needs</h2>
          <p>At Lumanation Commercial, we understand that electrical issues don't follow a 9-to-5 schedule. That's why our expert service team is available around the clock to handle all your commercial electrical service and maintenance needs. From emergency repairs to preventative maintenance, we're committed to keeping your business running smoothly.</p>
        </div>

        <div class="service-highlights">
          <div class="highlight-item">
            <div class="icon">
              <i class="fas fa-bolt"></i>
            </div>
            <h3>Quick & Easy Communication</h3>
            <p>When electrical emergencies arise, our team is prepared to respond swiftly. We ensure clear and dependable communication, keeping you informed every step of the way—before, during, and after the job is completed. Experience a seamless and stress-free process!</p>
          </div>

          <div class="highlight-item">
            <div class="icon">
              <i class="fas fa-tools"></i>
            </div>
            <h3>Preventative Maintenance</h3>
            <p>Avoid costly downtime with our comprehensive preventative maintenance programs. Our certified technicians will identify and address potential issues before they become major problems.</p>
          </div>

          <div class="highlight-item">
            <div class="icon">
              <i class="fas fa-hard-hat"></i>
            </div>
            <h3>Expert Technicians</h3>
            <p>Our service team consists of highly trained, licensed electricians with extensive experience in commercial electrical systems. We invest in ongoing education to ensure our team stays at the forefront of industry advancements.</p>
          </div>
        </div>

        <div class="steps-process">
          <h2>Easy as 1 – 2 – 3</h2>
          <div class="steps-container">
            <div class="step-item">
              <div class="step-number-container">
                <div class="step-number">1</div>
              </div>
              <div class="step-content">
                <h3>Request Service</h3>
                <p>A member of our team will contact you promptly to schedule and dispatch our technicians to your location.</p>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number-container">
                <div class="step-number">2</div>
              </div>
              <div class="step-content">
                <h3>Quote</h3>
                <p>Receive a comprehensive quote outlining your service options, giving you the opportunity to approve or adjust the details to fit your needs.</p>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number-container">
                <div class="step-number">3</div>
              </div>
              <div class="step-content">
                <h3>Completion of Work</h3>
                <p>After the job is done, you'll have a walkthrough with our technicians to review the work completed, sign off on approval, and enjoy convenient payment options and flexible invoicing.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="service-offerings">
          <h2>Our Service Offerings</h2>
          <div class="offerings-grid">
            <div class="offering-item">
              <h4>Electrical Troubleshooting & Repair</h4>
              <p>Quick diagnosis and repair of electrical issues to minimize downtime for your business.</p>
            </div>

            <div class="offering-item">
              <h4>Lighting Maintenance & Upgrades</h4>
              <p>Maintenance, repair, and energy-efficient upgrades for all commercial lighting systems.</p>
            </div>

            <div class="offering-item">
              <h4>Panel Upgrades & Replacements</h4>
              <p>Modernization of electrical panels to meet current codes and business demands.</p>
            </div>

            <div class="offering-item">
              <h4>Power Quality Analysis</h4>
              <p>Comprehensive testing and solutions for power quality issues affecting your equipment.</p>
            </div>

            <div class="offering-item">
              <h4>EV Charging Stations</h4>
              <p>LumaNation Electric is here to power up your electric vehicle charging needs. Our team of licensed and state-certified electricians is equipped to deliver high-quality installation services for your EV charging stations.</p>
            </div>

            <div class="offering-item">
              <h4>Generator Service & Testing</h4>
              <p>Maintenance and testing of backup power systems to ensure reliability when needed.</p>
            </div>
          </div>
        </div>

        <div class="service-commitment">
          <h2>Our Commitment to Excellence</h2>
          <p>On every project, Lumanation's Service Team commits to providing the highest level of workmanship and exceptional customer service. We strive for excellence through innovation, quality focus, and attention to detail. Our commitment to our clients has resulted in an exceptional customer retention rate—nearly 100% of our new customers become repeat customers.</p>

          <div class="testimonials">
            <h3>What Our Clients Say</h3>

            <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial">
              <p v-for="quote in testimonial.quote" :key="quote">{{ quote }}</p>
              <span class="client-name">— {{ testimonial.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, computed, nextTick } from "vue";
  import type { DefineComponent } from "vue";
  import Calendar from "primevue/calendar";
  import "primevue/calendar/style"; // Import PrimeVue styles directly in the component
  import ServiceContent from "@/components/service-content.vue";

  interface State {
    value: string;
    label: string;
  }

  // Extend HTMLElement to include the _clickOutside property
  declare global {
    interface HTMLElement {
      _clickOutside?: (event: MouseEvent) => void;
    }
  }

  export default defineComponent({
    components: {
      Calendar: Calendar as DefineComponent<any, any, any>,
      ServiceContent
    },
    setup() {
      const formData = reactive({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        assessmentDate: null,
        alternateDate: null,
        preferredTimes: [] as string[],
        serviceDetails: "",
        uploadedFiles: [] as File[]
      });

      const formErrors = reactive({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        assessmentDate: "",
        alternateDate: "",
        preferredTimes: "",
        serviceDetails: "",
        uploadedFiles: ""
      });

      const states: State[] = [
        { value: "AL", label: "Alabama" },
        { value: "AK", label: "Alaska" },
        { value: "AZ", label: "Arizona" },
        { value: "AR", label: "Arkansas" },
        { value: "CA", label: "California" },
        { value: "CO", label: "Colorado" },
        { value: "CT", label: "Connecticut" },
        { value: "DE", label: "Delaware" },
        { value: "FL", label: "Florida" },
        { value: "GA", label: "Georgia" },
        { value: "HI", label: "Hawaii" },
        { value: "ID", label: "Idaho" },
        { value: "IL", label: "Illinois" },
        { value: "IN", label: "Indiana" },
        { value: "IA", label: "Iowa" },
        { value: "KS", label: "Kansas" },
        { value: "KY", label: "Kentucky" },
        { value: "LA", label: "Louisiana" },
        { value: "ME", label: "Maine" },
        { value: "MD", label: "Maryland" },
        { value: "MA", label: "Massachusetts" },
        { value: "MI", label: "Michigan" },
        { value: "MN", label: "Minnesota" },
        { value: "MS", label: "Mississippi" },
        { value: "MO", label: "Missouri" },
        { value: "MT", label: "Montana" },
        { value: "NE", label: "Nebraska" },
        { value: "NV", label: "Nevada" },
        { value: "NH", label: "New Hampshire" },
        { value: "NJ", label: "New Jersey" },
        { value: "NM", label: "New Mexico" },
        { value: "NY", label: "New York" },
        { value: "NC", label: "North Carolina" },
        { value: "ND", label: "North Dakota" },
        { value: "OH", label: "Ohio" },
        { value: "OK", label: "Oklahoma" },
        { value: "OR", label: "Oregon" },
        { value: "PA", label: "Pennsylvania" },
        { value: "RI", label: "Rhode Island" },
        { value: "SC", label: "South Carolina" },
        { value: "SD", label: "South Dakota" },
        { value: "TN", label: "Tennessee" },
        { value: "TX", label: "Texas" },
        { value: "UT", label: "Utah" },
        { value: "VT", label: "Vermont" },
        { value: "VA", label: "Virginia" },
        { value: "WA", label: "Washington" },
        { value: "WV", label: "West Virginia" },
        { value: "WI", label: "Wisconsin" },
        { value: "WY", label: "Wyoming" }
      ];

      // State dropdown functionality
      const stateDropdownOpen = ref(false);
      const stateSearchQuery = ref("");

      const toggleStateDropdown = (): void => {
        stateDropdownOpen.value = !stateDropdownOpen.value;
      };

      const closeStateDropdown = (): void => {
        stateDropdownOpen.value = false;
      };

      const selectState = (state: State): void => {
        formData.state = state.value;
        stateDropdownOpen.value = false;
        stateSearchQuery.value = "";
      };

      const getStateLabel = (value: string): string => {
        const state = states.find(s => s.value === value);
        return state ? state.label : "";
      };

      const filteredStates = computed(() => {
        if (!stateSearchQuery.value) return states;
        const query = stateSearchQuery.value.toLowerCase();
        return states.filter(state =>
          state.label.toLowerCase().includes(query) ||
          state.value.toLowerCase().includes(query)
        );
      });

      // Click outside directive
      const vClickOutside = {
        mounted(el: HTMLElement, binding: any): void {
          el._clickOutside = (event: MouseEvent): void => {
            if (!(el === event.target || el.contains(event.target as Node))) {
              binding.value(event);
            }
          };
          document.addEventListener('click', el._clickOutside as EventListener);
        },
        unmounted(el: HTMLElement): void {
          if (el._clickOutside) {
            document.removeEventListener('click', el._clickOutside as EventListener);
          }
        }
      };

      // Phone number formatting
      const setupPhoneMask = () => {
        // Only initialize if empty or just digits
        if (!formData.phone || formData.phone.replace(/\D/g, "") === formData.phone) {
          // Format existing digits if any
          const digits = formData.phone.replace(/\D/g, "");
          if (digits.length === 0) {
            formData.phone = "";
          } else if (digits.length <= 3) {
            formData.phone = `(${digits})`;
          } else if (digits.length <= 6) {
            formData.phone = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
          } else {
            formData.phone = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
          }
        }
      };

      const formatPhoneNumber = (event: Event) => {
        // Get the input element
        const input = event.target as HTMLInputElement;

        // Store cursor position
        const selectionStart = input.selectionStart;
        const oldValue = formData.phone;

        // Get the raw input value and remove all non-digit characters
        let value = input.value.replace(/\D/g, "");

        // Limit to 10 digits
        if (value.length > 10) {
          value = value.slice(0, 10);
        }

        // Format the phone number as (XXX) XXX-XXXX
        if (value.length === 0) {
          formData.phone = "";
        } else if (value.length <= 3) {
          formData.phone = `(${value})`;
        } else if (value.length <= 6) {
          formData.phone = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
          formData.phone = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
        }

        // Try to maintain cursor position
        nextTick(() => {
          if (input === document.activeElement) {
            // Calculate new cursor position
            let newPosition = selectionStart || 0;

            // Adjust for added formatting characters
            if (oldValue.length < formData.phone.length && selectionStart) {
              const diff = formData.phone.length - oldValue.length;
              newPosition = Math.min(selectionStart + diff, formData.phone.length);
            }

            input.setSelectionRange(newPosition, newPosition);
          }
        });
      };

      // Zip code formatting
      const setupZipCodeMask = () => {
        // Only initialize if empty
        if (!formData.zipCode) {
          formData.zipCode = "";
        }
      };

      const formatZipCode = (event: Event) => {
        // Get the input element
        const input = event.target as HTMLInputElement;

        // Store cursor position
        const selectionStart = input.selectionStart;
        const oldValue = formData.zipCode;

        // Get the raw input value and remove all non-digit characters
        let value = input.value.replace(/\D/g, "");

        // Limit to 5 digits
        if (value.length > 5) {
          value = value.slice(0, 5);
        }

        formData.zipCode = value;

        // Try to maintain cursor position
        nextTick(() => {
          if (input === document.activeElement) {
            // Calculate new cursor position
            let newPosition = selectionStart || 0;

            // Adjust for any characters that were filtered out
            if (oldValue.length > value.length && selectionStart) {
              const diff = oldValue.length - value.length;
              newPosition = Math.max(0, selectionStart - diff);
            }

            input.setSelectionRange(newPosition, newPosition);
          }
        });
      };

      // Set minimum date to today
      const minDate = new Date();

      const submitForm = () => {
        // Reset errors
        formErrors.firstName = "";
        formErrors.lastName = "";
        formErrors.email = "";
        formErrors.phone = "";
        formErrors.companyName = "";
        formErrors.street = "";
        formErrors.city = "";
        formErrors.state = "";
        formErrors.zipCode = "";
        formErrors.assessmentDate = "";
        formErrors.alternateDate = "";
        formErrors.preferredTimes = "";
        formErrors.serviceDetails = "";
        formErrors.uploadedFiles = "";

        // Validate form
        let isValid = true;

        if (!formData.firstName.trim()) {
          formErrors.firstName = "First Name is required";
          isValid = false;
        }

        if (!formData.lastName.trim()) {
          formErrors.lastName = "Last Name is required";
          isValid = false;
        }

        if (!formData.email.trim()) {
          formErrors.email = "Email is required";
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.email = "Please enter a valid email address";
          isValid = false;
        }

        if (!formData.phone.trim()) {
          formErrors.phone = "Phone Number is required";
          isValid = false;
        }

        // if (!formData.street.trim()) {
        //   formErrors.street = "Street is required";
        //   isValid = false;
        // }

        // if (!formData.city.trim()) {
        //   formErrors.city = "City is required";
        //   isValid = false;
        // }

        // if (!formData.state) {
        //   formErrors.state = "State is required";
        //   isValid = false;
        // }

        // if (!formData.zipCode.trim()) {
        //   formErrors.zipCode = "Zip Code is required";
        //   isValid = false;
        // } else if (!/^\d{5}$/.test(formData.zipCode)) {
        //   formErrors.zipCode = "Please enter a valid 5-digit Zip Code";
        //   isValid = false;
        // }

        if (!formData.assessmentDate) {
          formErrors.assessmentDate = "Assessment date is required";
          isValid = false;
        }

        if (!formData.serviceDetails.trim()) {
          formErrors.serviceDetails = "Service details are required";
          isValid = false;
        }

        // Form is valid, submit logic here
        if (isValid) {
          console.log("Form submitted successfully", formData);
        }
      };

      const testimonials = [
        {
          quote: [
            "Our business hired Lumen Lighting to replace all of the lights in our new warehouse and run power for a gate and garage door opener.",
            "While they were there, they noticed a Federal electrical panel which is a tremendous fire hazard. They were able to correct this issue as well in a timely and cost effective manner.",
            "These guys do outstanding work at a fair price. Give them a call!"
          ],
          name: "Nathan McGregor"
        },
        {
          quote: [
            "Working with these guys was simple and easy. As a long time veteran of the construction industry, it's nice to find a company and people like Ben who are trustworthy and reliable. Highly recommend."
          ],
          name: "Jordan Forrester"
        },
        {
          quote: [
            "They were great and easy to deal with. Added lighting in my upper cabinets. Treated us like family and recommended to everyone!"
          ],
          name: "Sam Hogue"
        },
        {
          quote: [
            "Great service and great work for a great price! We've had Lumen out for two very different jobs (Installing lighting in a new commercial building and renovating the electric system in a turn-of-the-century farmhouse) and both were handled with care and efficiency, with impressive follow-up to make sure everything was working correctly. I work with a lot of contractors and they're among the best in any field."
          ],
          name: "JMW Powell"
        },
        {
          quote: [
            "We called Lumen to come out and give us a bid to hang ceiling fans and add dimer switches in our home. Gave us a great price and was super flexible and easy to work with! Was grateful to have done business with them!"
          ],
          name: "Aubree Widener"
        }
      ];

      const handleAnytimeChange = (e: any) => {
        // If Anytime is checked, clear all other options
        if (formData.preferredTimes.includes("Anytime")) {
          // Keep only Anytime
          formData.preferredTimes = ["Anytime"];
        }
      };

      const handleSpecificTimeChange = (e: any) => {
        // If any specific time is selected, remove Anytime
        if (formData.preferredTimes.includes("Anytime") &&
            (formData.preferredTimes.includes("Morning") ||
             formData.preferredTimes.includes("Afternoon") ||
             formData.preferredTimes.includes("Evening"))) {
          // Remove Anytime from the array
          formData.preferredTimes = formData.preferredTimes.filter(time => time !== "Anytime");
        }
      };

      const isDragging = ref(false);
      const fileInputRef = ref<HTMLInputElement | null>(null);

      const onDragOver = () => {
        isDragging.value = true;
      };

      const onDragLeave = () => {
        isDragging.value = false;
      };

      const onDrop = (event: any) => {
        isDragging.value = false;
        const files = Array.from(event.dataTransfer.files);
        const validFiles = validateFiles(files);
        formData.uploadedFiles = [...formData.uploadedFiles, ...validFiles];
        formErrors.uploadedFiles = "";
      };

      const onFileInputChange = (event: any) => {
        const files = Array.from(event.target.files);
        const validFiles = validateFiles(files);
        formData.uploadedFiles = [...formData.uploadedFiles, ...validFiles];
        formErrors.uploadedFiles = "";
      };

      const invalidFileWarnings = ref([] as { name: string; reason: string }[]);

      const validateFiles = (files: any[]) => {
        const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes
        const validFiles = [];
        const invalidFiles = [];

        for (const file of files) {
          // Check if it's an image
          if (!file.type.startsWith("image/")) {
            invalidFiles.push({ name: file.name, reason: "Not an image file" });
            continue;
          }

          // Check file size
          if (file.size > maxFileSize) {
            invalidFiles.push({ name: file.name, reason: "File size exceeds 5MB" });
            continue;
          }

          validFiles.push(file);
        }

        // Show error message if there are invalid files
        if (invalidFiles.length > 0) {
          invalidFileWarnings.value = invalidFiles;
        }

        return validFiles;
      };

      const triggerFileInput = () => {
        if (fileInputRef.value) {
          fileInputRef.value.click();
        }
      };

      const removeFile = (index: number) => {
        formData.uploadedFiles.splice(index, 1);
      };

      const clearFileWarnings = () => {
        invalidFileWarnings.value = [];
      };

      const formatFileSize = (size: number) => {
        if (size < 1024) return `${size} bytes`;
        const kilobyte = size / 1024;
        if (kilobyte < 1024) return `${kilobyte.toFixed(2)} KB`;
        const megabyte = kilobyte / 1024;
        if (megabyte < 1024) return `${megabyte.toFixed(2)} MB`;
        const gigabyte = megabyte / 1024;
        return `${gigabyte.toFixed(2)} GB`;
      };

      return {
        formData,
        formErrors,
        submitForm,
        testimonials,
        states,
        stateDropdownOpen,
        stateSearchQuery,
        toggleStateDropdown,
        closeStateDropdown,
        selectState,
        getStateLabel,
        filteredStates,
        vClickOutside,
        setupPhoneMask,
        formatPhoneNumber,
        setupZipCodeMask,
        formatZipCode,
        minDate,
        handleAnytimeChange,
        handleSpecificTimeChange,
        isDragging,
        onDragOver,
        onDragLeave,
        onDrop,
        triggerFileInput,
        onFileInputChange,
        removeFile,
        formatFileSize,
        fileInputRef,
        invalidFileWarnings,
        clearFileWarnings
      };
    },
    directives: {
      'click-outside': {
        mounted(el: HTMLElement, binding: any): void {
          el._clickOutside = (event: MouseEvent): void => {
            if (!(el === event.target || el.contains(event.target as Node))) {
              binding.value(event);
            }
          };
          document.addEventListener('click', el._clickOutside as EventListener);
        },
        unmounted(el: HTMLElement): void {
          if (el._clickOutside) {
            document.removeEventListener('click', el._clickOutside as EventListener);
          }
        }
      }
    }
  });
</script>

<style scoped lang="scss">
  .services {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 100px);
    font-family: "RobotoFlex";

    .hero-banner {
      position: relative;
      background-image: url('/src/assets/images/service-banner.jpg');
      background-size: cover;
      background-position: center;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          color: white;
          text-align: center;

          h1 {
            font-size: 3rem;
            margin-bottom: 20px;
          }

          p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto;
          }
        }
      }
    }

    .form-container {
      background-color: #f5f5f5;
      padding: 40px 0;

      .form-header {
        text-align: center;
        margin-bottom: 30px;

        h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.1rem;
          color: #666;
        }
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .service-form {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        .form-section {
          margin-bottom: 1.5rem;
          width: 100%;

          .section-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: #333;
          }

          .form-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-bottom: 1rem;

            @media (max-width: 640px) {
              flex-direction: column;
              gap: 0;

              .field-wrapper:not(:last-child) {
                margin-bottom: 1rem;
              }
            }

            .field-wrapper {
              margin-bottom: 0;
            }
          }

          .field-wrapper {
            margin-bottom: 1rem;
            position: relative;
            width: 100%;

            &.half-width {
              flex: 1;
              min-width: 0;

              @media (max-width: 640px) {
                flex: auto;
              }
            }
          }

          .city {
            flex: 2;
            min-width: 150px;
          }

          .state {
            flex: 1.3;
            min-width: 160px;
          }

          .zip {
            flex: 1;
            min-width: 100px;
          }

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
                border-color: #bbbbbb;
              }

              &:focus,
              &:active {
                outline: none;
                border-color: #2196f3;
                box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
              }

              .placeholder {
                color: transparent;
              }

              .dropdown-icon {
                transition: transform 0.3s;
                font-size: 0.75rem;
                margin-left: 0.5rem;
                color: #6c757d;

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
              color: #6c757d;
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
                    border-color: #2196f3;
                    box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
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

                  &:hover {
                    background-color: #f8f9fa;
                  }
                }
              }
            }
          }

          .p-float-label {
            position: relative;
            margin-bottom: 0;

            input, textarea {
              width: 100%;
              height: 40px;
              padding: 0.75rem 0.75rem;
              font-size: 1rem;
              border: 1px solid #ced4da;
              border-radius: 4px;
              background-color: #fff;
              transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
              box-sizing: border-box;

              &:focus {
                outline: none;
                border-color: #2196f3;
                box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
              }

              &.p-filled,
              &:not(:placeholder-shown) {
                font-family: "RobotoFlex", sans-serif;
                color: #333;
                line-height: normal;
                text-align: left;
                display: block;
              }
            }

            textarea {
              height: auto;
              resize: vertical;
              min-height: 120px;
            }

            label {
              position: absolute;
              top: 50%;
              left: 0.75rem;
              transform: translateY(-50%);
              pointer-events: none;
              transition: 0.2s ease all;
              color: #6c757d;
              margin: 0;
              background-color: transparent;
              padding: 0 0.25rem;
              z-index: 1;
              font-family: "RobotoFlex", sans-serif;
              font-size: 1rem;
              line-height: 1;
            }

            input:focus ~ label,
            input.p-filled ~ label,
            input:not(:placeholder-shown) ~ label,
            textarea:focus ~ label,
            textarea.p-filled ~ label,
            textarea:not(:placeholder-shown) ~ label,
            .has-value {
              top: 0;
              transform: translateY(-50%) scale(0.85);
              background-color: white;
              color: #2196f3;
              z-index: 1;
            }
          }
        }

        .submit-button {
          display: block;
          width: 100%;
          padding: 0.75rem 1.5rem;
          margin-top: 1rem;
          background-color: #2196f3;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.15s ease-in-out;

          &:hover {
            background-color: #0d8aee;
          }

          &:focus {
            outline: none;
            box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
          }

          &:disabled {
            background-color: #6c757d;
            cursor: not-allowed;
          }

          .loading-spinner {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
            border: 2px solid white;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
        }

        .error-message {
          color: #dc3545;
          font-size: 0.75rem;
          margin-top: 0.25rem;
          position: absolute;
        }

        .success-message {
          text-align: center;
          padding: 2rem;
          background-color: #d4edda;
          color: #155724;
          border-radius: 4px;
          margin-bottom: 1rem;

          h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          p {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .btn-back {
            display: inline-block;
            padding: 0.5rem 1rem;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 0.875rem;
            cursor: pointer;
            transition: background-color 0.15s ease-in-out;

            &:hover {
              background-color: #218838;
            }
          }
        }
      }
    }

    .content {
      padding: 60px 0;

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .service-intro {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 60px;

        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #666;
        }
      }

      .service-highlights {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        margin-bottom: 60px;

        .highlight-item {
          flex: 1;
          min-width: 300px;
          max-width: 350px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 30px;
          text-align: center;

          .icon {
            width: 70px;
            height: 70px;
            background-color: #e3f2fd;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;

            i {
              font-size: 2rem;
              color: #2196f3;
            }
          }

          h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #333;
          }

          p {
            font-size: 1rem;
            line-height: 1.5;
            color: #666;
          }
        }
      }

      .steps-process {
        max-width: 800px;
        margin: 0 auto 60px;
        text-align: center;

        h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #333;
        }

        .steps-container {
          .step-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 30px;
            text-align: left;

            .step-number-container {
              flex-shrink: 0;
              margin-right: 20px;

              .step-number {
                width: 50px;
                height: 50px;
                background-color: #2196f3;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.5rem;
                font-weight: bold;
              }
            }

            .step-content {
              h3 {
                font-size: 1.5rem;
                margin-bottom: 10px;
                color: #333;
              }

              p {
                font-size: 1rem;
                line-height: 1.5;
                color: #666;
              }
            }
          }
        }
      }

      .service-offerings {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;

        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }

        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;

          @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media (max-width: 480px) {
            grid-template-columns: 1fr;
          }

          .offering-item {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 30px;

            h4 {
              font-size: 1.25rem;
              margin-bottom: 15px;
              color: #333;
            }

            p {
              font-size: 1rem;
              line-height: 1.5;
              color: #666;
            }
          }
        }
      }

      .service-commitment {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;

        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #666;
          margin-bottom: 40px;
        }

        .testimonials {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;

          .testimonial {
            flex: 1;
            min-width: 300px;
            max-width: 350px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 30px;
            text-align: left;

            .quote {
              font-size: 1.1rem;
              line-height: 1.6;
              color: #666;
              font-style: italic;
              margin-bottom: 20px;
            }

            .author {
              display: flex;
              align-items: center;

              .avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;
                margin-right: 15px;

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }

              .info {
                .name {
                  font-size: 1.1rem;
                  font-weight: 600;
                  color: #333;
                  margin-bottom: 5px;
                }

                .company {
                  font-size: 0.9rem;
                  color: #666;
                }
              }
            }
          }
        }
      }
    }
  }

  .calendar-container {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  /* Calendar component styling */
  :deep(.p-calendar) {
    width: 100%;

    .p-inputtext {
      width: 100%;
      height: 40px;
      padding: 0.75rem;
      font-size: 1rem;
      border: 1px solid #ced4da;
      border-radius: 4px;
      background-color: #fff;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      box-sizing: border-box;
      font-family: "RobotoFlex", sans-serif;
      color: #333;
      line-height: normal;
      text-align: left;

      &:focus {
        outline: none;
        border-color: #2196f3;
        box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
      }
    }

    .p-datepicker-trigger {
      height: 40px;
      background-color: #f8f9fa;
      border: 1px solid #ced4da;
      color: #495057;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;

      &:hover {
        background-color: #e9ecef;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
      }
    }
  }

  .calendar-label-active {
    transform: translateY(-0.4rem) scale(0.85) !important;
    color: #2196f3 !important;
  }

  .field-subtitle {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #333;
    font-family: "RobotoFlex", sans-serif;
  }

  .selected-files {
    margin-top: 1rem;

    h5 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    .file-list {
      list-style: none;
      padding: 0;
      margin: 0;

      .file-item {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-bottom: 1px solid #e9ecef;

        .file-name {
          font-size: 0.875rem;
          margin-right: 0.5rem;
        }

        .file-size {
          font-size: 0.875rem;
          color: #666;
          margin-right: 0.5rem;
        }

        .remove-file {
          font-size: 1rem;
          padding: 0.25rem;
          border: none;
          background-color: transparent;
          cursor: pointer;
          color: #dc3545;

          &:hover {
            color: #c82333;
          }
        }
      }
    }
  }

  .file-warnings {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
    border-radius: 4px;

    .warning-header {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;

      i {
        font-size: 1.5rem;
        margin-right: 0.5rem;
        color: #dc3545;
      }

      span {
        font-size: 1rem;
        font-weight: 600;
        color: #333;
      }
    }

    .warning-list {
      list-style: none;
      padding: 0;
      margin: 0;

      .warning-item {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-bottom: 1px solid #e9ecef;

        .warning-filename {
          font-size: 0.875rem;
          margin-right: 0.5rem;
        }

        .warning-reason {
          font-size: 0.875rem;
          color: #666;
        }
      }
    }

    .dismiss-warnings {
      display: block;
      width: 100%;
      padding: 0.5rem 1rem;
      margin-top: 1rem;
      background-color: #ced4da;
      color: #495057;
      border: none;
      border-radius: 4px;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background-color 0.15s ease-in-out;

      &:hover {
        background-color: #b1bbc4;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
      }
    }
  }

  .custom-dropzone {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 2px dashed #ced4da;
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.15s ease-in-out;

    &:hover {
      border-color: #2196f3;
    }

    &.drag-over {
      border-color: #2196f3;
      background-color: #e3f2fd;
    }

    .file-input {
      display: none;
    }

    .dropzone-content {
      text-align: center;

      i {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #2196f3;
      }

      p {
        font-size: 1rem;
        margin-bottom: 1rem;
        color: #666;
      }

      .file-hint {
        font-size: 0.875rem;
        color: #666;
      }
    }
  }

  .upload-disclaimer {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1rem;
  }
</style>

<style>
  /* Calendar dropdown styling */
  .p-datepicker {
    border: 1px solid #ced4da !important;
    border-radius: 4px !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
    background-color: #fff !important;
    padding: 0.5rem !important;
  }

  .p-datepicker-header {
    padding: 0.5rem !important;
    background-color: #f8f9fa !important;
    border-bottom: 1px solid #e9ecef !important;
  }

  .p-datepicker-calendar th {
    padding: 0.5rem !important;
  }

  .p-datepicker-calendar td {
    padding: 0.25rem !important;
  }

  .p-highlight {
    background-color: #2196f3 !important;
    color: #fff !important;
  }

  /* Direct checkbox styling */
  .p-checkbox .p-checkbox-box.p-highlight {
    background-color: #2196f3 !important;
    border-color: #2196f3 !important;
  }

  .p-checkbox-checked .p-checkbox-box {
    background-color: #2196f3 !important;
    border-color: #2196f3 !important;
  }

  .p-checkbox .p-checkbox-box.p-highlight svg,
  .p-checkbox .p-checkbox-box.p-highlight .p-icon,
  .p-checkbox .p-checkbox-box.p-highlight path {
    color: #ffffff !important;
    fill: #ffffff !important;
  }
</style>

<style scoped lang="scss">
</style>
