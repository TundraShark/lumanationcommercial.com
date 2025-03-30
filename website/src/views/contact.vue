<template>
  <div class="contact">
    <div class="hero-banner">
      <div class="overlay">
        <div class="container">
          <h1>Contact Us</h1>
          <p>We're here to help with all your electrical needs. Reach out to us with any questions or service requests.</p>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="contact-sections">
          <div class="contact-form-section">
            <h2 class="section-heading">Send Us a Message</h2>
            <div class="underline"></div>
            <p class="section-description">Fill out the form below and we'll get back to you as soon as possible.</p>

            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <span class="p-float-label">
                  <InputText id="name" v-model="contactForm.name" required />
                  <label for="name">Name</label>
                </span>
              </div>

              <div class="form-group">
                <span class="p-float-label">
                  <InputText id="email" type="email" v-model="contactForm.email" required />
                  <label for="email">Email</label>
                </span>
              </div>

              <div class="form-group">
                <span class="p-float-label">
                  <InputMask id="phone" v-model="contactForm.phone" mask="(999) 999-9999" required />
                  <label for="phone">Phone</label>
                </span>
              </div>

              <div class="form-group">
                <CustomDropdown
                  v-model="contactForm.inquiryType"
                  :options="inquiryOptions"
                  label="Inquiry Type"
                  optionLabel="name"
                  optionValue="code"
                  required
                />
              </div>

              <div class="form-group">
                <span class="p-float-label">
                  <Textarea id="message" v-model="contactForm.message" rows="5" required autoResize />
                  <label for="message">Message</label>
                </span>
              </div>

              <div class="form-actions">
                <button type="reset" class="cancel-btn" @click="resetForm">Reset</button>
                <button type="submit" class="submit-btn">Submit</button>
              </div>
            </form>
          </div>

          <div class="contact-info-section">
            <h2 class="section-heading">Contact Information</h2>
            <div class="underline"></div>

            <div class="info-group">
              <h3>Office Location</h3>
              <p><i class="fas fa-map-marker-alt"></i> 3400 Eldorado Pkwy, Suite 3, McKinney, TX 75070</p>
              <p><i class="fas fa-phone"></i> (214) 555-1234</p>
              <p><i class="fas fa-envelope"></i> info@lumanationel.com</p>
            </div>

            <div class="info-group">
              <h3>Warehouse Location</h3>
              <p><i class="fas fa-map-marker-alt"></i> 1822 County Road 88, Celina, TX 75009</p>
              <p><i class="fas fa-phone"></i> (214) 555-5678</p>
            </div>

            <div class="info-group">
              <h3>Department Contacts</h3>
              <p><strong>Service:</strong> service@lumanationel.com</p>
              <p><strong>Sales:</strong> sales@lumanationel.com</p>
              <p><strong>HR:</strong> hr@lumanationel.com</p>
            </div>

            <div class="business-hours">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from "vue";
  import InputText from "primevue/inputtext";
  import InputMask from "primevue/inputmask";
  import Textarea from "primevue/textarea";
  import CustomDropdown from "../components/custom-dropdown.vue";

  interface ContactForm {
    name: string;
    email: string;
    phone: string;
    inquiryType: InquiryOption | null;
    message: string;
  }

  interface InquiryOption {
    name: string;
    code: string;
  }

  const inquiryOptions: InquiryOption[] = [
    { name: "General Inquiry", code: "general" },
    { name: "Service Request", code: "service" },
    { name: "Quote Request", code: "quote" },
    { name: "Job Opportunity", code: "job" },
    { name: "Feedback", code: "feedback" }
  ];

  const contactForm = reactive<ContactForm>({
    name: "",
    email: "",
    phone: "",
    inquiryType: null,
    message: ""
  });

  const submitForm = () => {
    // In a real application, you would send the form data to your server
    console.log("Form submitted:", contactForm);
    alert("Thank you for your message! We will get back to you soon.");
    resetForm();
  };

  const resetForm = () => {
    contactForm.name = "";
    contactForm.email = "";
    contactForm.phone = "";
    contactForm.inquiryType = null;
    contactForm.message = "";
  };
</script>

<style scoped lang="scss">
  @import "@/style.scss";

  .contact {
    padding: 8rem 0 4rem 0;

    .hero-banner {
      height: 300px;
      // background-image: url("@/assets/images/hero-contact.jpg");
      // background-size: cover;
      // background-position: center;
      position: relative;

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          color: white;

          h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-family: "RobotoFlex";
            font-weight: bold;
          }

          p {
            font-size: 1.2rem;
            max-width: 600px;
            line-height: 1.5;
            font-family: "RobotoFlex";
          }
        }
      }
    }

    .content {
      padding: 4rem 0;

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .contact-sections {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;

        @media (max-width: 992px) {
          grid-template-columns: 1fr;
        }

        .section-heading {
          font-size: 2rem;
          color: $--primary-3;
          margin-bottom: 0.5rem;
          font-family: "Oswald";
          position: relative;
          padding-bottom: 0.5rem;
          display: inline-block;

          &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: $--accent-3;
          }
        }

        .underline {
          display: none;
        }

        .section-description {
          margin-bottom: 2rem;
          color: $--primary-3;
          font-family: "RobotoFlex";
        }
      }

      .contact-form-section {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;
      }

      .contact-info-section {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;
      }

      .contact-form {
        .form-group {
          margin-bottom: 1.5rem;
          position: relative;

          :deep(.p-inputtext), :deep(.p-inputmask) {
            width: 100%;
            padding: 0.75rem;
            font-family: "RobotoFlex";
            border: 1px solid #ced4da !important;
            border-radius: 4px;
            background-color: #fff !important;
            transition: border-color 0.2s;

            &:focus {
              border-color: $--accent-1 !important;
              outline: none;
              box-shadow: 0 0 0 2px rgba(37, 52, 114, 0.2);
            }
          }

            /* Custom styling for form components */
          :deep(.custom-dropdown) {
            width: 100%;
          }



          :deep(.p-float-label) {
            display: block;
            position: relative;
          }

          :deep(.p-float-label label) {
            position: absolute;
            top: 50%;
            left: 0.75rem;
            transform: translateY(-50%);
            font-family: "RobotoFlex";
            color: $--primary-3;
            transition: all 0.2s ease;
            pointer-events: none;
          }

          :deep(.p-textarea) {
            width: 100%;
            padding: 0.75rem;
            font-family: "RobotoFlex";
            border: 1px solid #ced4da !important;
            border-radius: 4px;
            background-color: #fff !important;
            transition: border-color 0.2s;
            min-height: 120px !important;
            resize: vertical !important;

            &:focus {
              border-color: $--accent-1 !important;
              outline: none;
              box-shadow: 0 0 0 2px rgba(37, 52, 114, 0.2) !important;
            }
          }

          :deep(.p-float-label textarea) ~ label {
            top: 1rem !important;
            transform: none !important;
          }

          :deep(.p-float-label input:focus) ~ label,
          :deep(.p-float-label input.p-filled) ~ label,
          :deep(.p-float-label textarea:focus) ~ label,
          :deep(.p-float-label textarea.p-filled) ~ label,
          :deep(.p-float-label .p-dropdown.p-focus) ~ label,
          :deep(.p-float-label .p-dropdown-label:not(.p-placeholder)) ~ label,
          :deep(.p-float-label .p-dropdown:has(.p-dropdown-label:not(.p-placeholder))) ~ label,
          :deep(.p-float-label .p-dropdown.p-inputwrapper-filled) ~ label {
            top: -0.75rem !important;
            font-size: 0.75rem !important;
            transform: translateY(0) !important;
            background-color: white !important;
            padding: 0 0.25rem !important;
            z-index: 1 !important;
          }
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;

          .cancel-btn {
            padding: 0.75rem 1.5rem;
            background-color: #f8f9fa;
            border: 1px solid #ced4da;
            border-radius: 4px;
            font-family: "RobotoFlex";
            cursor: pointer;
            transition: background-color 0.2s;

            &:hover {
              background-color: #e9ecef;
            }
          }

          .submit-btn {
            padding: 0.75rem 1.5rem;
            background-color: $--accent-3;
            color: white;
            border: none;
            border-radius: 4px;
            font-family: "RobotoFlex";
            cursor: pointer;
            transition: background-color 0.2s;

            &:hover {
              background-color: darken($--accent-3, 10%);
            }
          }
        }
      }

      .contact-info-section {
        .info-group {
          margin-bottom: 2rem;

          h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: $--primary-1;
            font-family: "RobotoFlex";
            font-weight: 600;
          }

          p {
            margin-bottom: 0.5rem;
            font-family: "RobotoFlex";
            color: $--primary-3;
            display: flex;
            align-items: center;
            gap: 0.5rem;

            i {
              color: $--accent-1;
              width: 20px;
            }

            strong {
              display: inline-block;
              width: 100px;
            }
          }
        }

        .business-hours {
          h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: $--primary-1;
            font-family: "RobotoFlex";
            font-weight: 600;
          }

          p {
            margin-bottom: 0.5rem;
            font-family: "RobotoFlex";
            color: $--primary-3;
          }
        }
      }
    }
  }
</style>
