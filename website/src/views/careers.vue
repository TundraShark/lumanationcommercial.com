<template>
  <div class="careers-page">
    <div class="hero-banner">
      <div class="overlay">
        <h1>Join Our Team</h1>
        <p>Build your career with LumaNation Commercial</p>
      </div>
    </div>

    <div class="content-container">
      <!-- Company Description Section -->
      <section class="company-description">
        <h2>About Working at LumaNation</h2>
        <p>At LumaNation Commercial, we believe in fostering a culture of excellence, integrity, and growth. We're looking for talented individuals who share our values and are passionate about making a difference in the electrical contracting industry.</p>
      </section>

      <!-- Benefits Section -->
      <section class="benefits-section">
        <h2>Benefits</h2>
        <div class="benefits-container">
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg401k />
            </div>
            <h3>401(k) Plan</h3>
            <p>Competitive 401(k) retirement plan with company matching to help secure your future.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">
              <svgHealthcare />
            </div>
            <h3>Healthcare</h3>
            <p>Comprehensive medical, dental, and vision insurance for you and your family.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">
              <svgPto />
            </div>
            <h3>Paid Time Off</h3>
            <p>Generous PTO policy that encourages work-life balance and personal well-being.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">
              <svgHolidays />
            </div>
            <h3>Paid Holidays</h3>
            <p>Enjoy paid time off for major holidays throughout the year.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">
              <svgEducation />
            </div>
            <h3>Education Resources</h3>
            <p>Tuition reimbursement and ongoing training opportunities to advance your skills.</p>
          </div>
        </div>
      </section>

      <!-- We may or may not use this section later, so keep it commented out for now -->
      <!--
        <div class="section">
          <div class="title-green">Career Path</div>

          <div class="career-path-container desktop">
            <Timeline :value="careerPath" align="alternate" class="customized-timeline">
              <template #opposite="slotProps">
                <div class="card">
                  <div class="title">{{ slotProps.item.title }}</div>
                  <div class="divider" />
                  <div class="text">{{ slotProps.item.text }}</div>
                </div>
              </template>
              <template #marker="slotProps">
                <div class="icon">
                  <component :is="slotProps.item.icon" />
                </div>
                <div v-if="slotProps.index + 1 === careerPath.length" class="p-timeline-event-connector final" />
              </template>
            </Timeline>
          </div>

          <div class="career-path-container mobile">
            <Timeline :value="careerPath" align="left" class="customized-timeline">
              <template #opposite="slotProps">
                <div class="card">
                  <div class="title">{{ slotProps.item.title }}</div>
                  <div class="divider" />
                  <div class="text">{{ slotProps.item.text }}</div>
                </div>
              </template>
              <template #marker="slotProps">
                <div class="icon">
                  <component :is="slotProps.item.icon" />
                </div>
                <div v-if="slotProps.index + 1 === careerPath.length" class="p-timeline-event-connector final" />
              </template>
            </Timeline>
          </div>
        </div>
      -->

      <!-- Job Listings Section -->
      <section class="job-listings">
        <h2>Current Openings</h2>
        <div class="jobs-container">
          <div v-for="(job, index) in jobs" :key="index" class="job-card" :class="{ 'active': selectedJob === job }">
            <h3>{{ job.title }}</h3>
            <p class="job-location">{{ job.location }}</p>
            <button class="view-details-btn" @click="selectJob(job)">View Details</button>
          </div>
        </div>
      </section>

      <!-- Job Details Section -->
      <section v-if="selectedJob" class="job-details">
        <h2>{{ selectedJob?.title }}</h2>
        <p class="job-location">{{ selectedJob?.location }}</p>
        <div class="job-info">
          <h3>Job Description</h3>
          <p>{{ selectedJob.description }}</p>

          <h3>Requirements</h3>
          <ul>
            <li v-for="(requirement, index) in selectedJob.requirements" :key="index">{{ requirement }}</li>
          </ul>

          <h3>Responsibilities</h3>
          <ul>
            <li v-for="(responsibility, index) in selectedJob.responsibilities" :key="index">{{ responsibility }}</li>
          </ul>

          <button class="apply-btn" @click="showApplicationForm = true; scrollToApplicationForm()">Apply Now</button>
        </div>
      </section>

      <!-- Application Form Section -->
      <section v-if="showApplicationForm && selectedJob" class="application-form">
        <h2>Apply for: {{ selectedJob.title }}</h2>
        <form @submit.prevent="submitApplication">
          <div class="form-group">
            <span class="p-float-label">
              <InputText id="fullName" v-model="application.fullName" required />
              <label for="fullName">Full Name</label>
            </span>
          </div>

          <div class="form-group">
            <span class="p-float-label">
              <InputText id="email" type="email" v-model="application.email" required />
              <label for="email">Email</label>
            </span>
          </div>

          <div class="form-group">
            <span class="p-float-label">
              <InputMask id="phone" v-model="application.phone" mask="(999) 999-9999" required />
              <label for="phone">Phone</label>
            </span>
          </div>



          <div class="form-group resume-upload">
            <label>Resume (PDF, DOC, DOCX)</label>
            <div class="custom-file-upload" @click="triggerFileInput" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave" @drop.prevent="onDrop">
              <div class="upload-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <div class="upload-text" v-if="!application.resume">
                <p>Drag and drop your resume here</p>
                <p>or</p>
                <span class="browse-button">Browse Files</span>
              </div>
              <div class="file-info" v-else>
                <p class="file-name">{{ application.resume.name }}</p>
                <p class="file-size">{{ formatFileSize(application.resume.size) }}</p>
                <button class="remove-file" @click.stop="removeFile">Remove</button>
              </div>
              <input
                ref="fileInput"
                type="file"
                accept=".pdf,.doc,.docx"
                style="display: none;"
                @change="onFileSelected" />
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="cancel-btn" @click="cancelApplication">Cancel</button>
            <button type="submit" class="submit-btn">Submit Application</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from "vue";
  import FileUpload from "primevue/fileupload";
  import InputText from "primevue/inputtext";
  import Textarea from "primevue/textarea";
  import InputMask from "primevue/inputmask";
  import svg401k from "@/assets/svg/401k.vue";
  import svgHealthcare from "@/assets/svg/healthcare.vue";
  import svgPto from "@/assets/svg/pto.vue";
  import svgHolidays from "@/assets/svg/holidays.vue";
  import svgEducation from "@/assets/svg/education.vue";

  // Job listings data
  const jobs = [
    {
      title: "Electrical Foreman",
      location: "Dallas, TX",
      description: "We are seeking a licensed Electrical Foreman to join our team. The ideal candidate will have extensive experience in commercial electrical installations and be able to lead projects from start to finish.",
      requirements: [
        "Valid Electrical Foreman license",
        "Minimum 10 years of experience in commercial electrical work",
        "Strong knowledge of NEC and local electrical codes",
        "Ability to read and interpret blueprints and schematics",
        "Valid driver's license and clean driving record"
      ],
      responsibilities: [
        "Lead and supervise electrical installation projects",
        "Ensure all work meets code requirements and quality standards",
        "Troubleshoot complex electrical issues",
        "Train and mentor apprentice and journeyman electricians",
        "Coordinate with project managers and other trades"
      ]
    },
    {
      title: "Journeyman Electrician",
      location: "Celina, TX",
      description: "We are looking for experienced Journeyman Electricians to join our growing team. The successful candidate will work on commercial and industrial electrical installations and maintenance.",
      requirements: [
        "Valid Journeyman Electrician license",
        "5+ years of experience in commercial electrical work",
        "Knowledge of NEC and local electrical codes",
        "Ability to work independently and as part of a team",
        "Valid driver's license"
      ],
      responsibilities: [
        "Install, maintain, and repair electrical systems in commercial buildings",
        "Read and interpret electrical plans and blueprints",
        "Troubleshoot electrical problems",
        "Mentor apprentice electricians",
        "Ensure all work meets code requirements"
      ]
    },
    {
      title: "Apprentice Electrician",
      location: "McKinney, TX",
      description: "We are seeking motivated individuals to join our team as Apprentice Electricians. This position offers an excellent opportunity to learn the electrical trade while working alongside experienced professionals.",
      requirements: [
        "High school diploma or GED",
        "Basic understanding of electrical concepts",
        "Willingness to learn and take direction",
        "Reliable transportation",
        "Ability to work in various weather conditions"
      ],
      responsibilities: [
        "Assist Journeyman and Electrical Foremans with installations",
        "Learn to read blueprints and schematics",
        "Help with material handling and job site preparation",
        "Attend required training and education programs",
        "Follow safety protocols and procedures"
      ]
    },
    {
      title: "Project Manager",
      location: "Dallas, TX",
      description: "We are looking for an experienced Project Manager to oversee our electrical contracting projects. The ideal candidate will have a background in electrical work and strong management skills.",
      requirements: [
        "Bachelor's degree in Construction Management, Engineering, or related field",
        "5+ years of experience in electrical project management",
        "Strong understanding of electrical systems and construction processes",
        "Excellent communication and leadership skills",
        "Proficiency in project management software"
      ],
      responsibilities: [
        "Oversee multiple electrical projects from start to completion",
        "Develop and maintain project schedules and budgets",
        "Coordinate with clients, subcontractors, and team members",
        "Ensure projects meet quality standards and code requirements",
        "Identify and resolve issues that arise during projects"
      ]
    },
    {
      title: "Estimator",
      location: "Celina, TX",
      description: "We are seeking an Estimator to join our team. The successful candidate will be responsible for preparing accurate cost estimates for electrical projects and helping secure new business.",
      requirements: [
        "3+ years of experience in electrical estimating",
        "Knowledge of electrical systems and construction processes",
        "Proficiency in estimating software",
        "Strong analytical and mathematical skills",
        "Attention to detail and accuracy"
      ],
      responsibilities: [
        "Review project plans and specifications",
        "Calculate labor, material, and equipment costs",
        "Prepare detailed cost estimates for bids",
        "Collaborate with project managers and field supervisors",
        "Maintain database of current pricing and historical data"
      ]
    }
  ];

  // Define job interface
  interface Job {
    title: string;
    location: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
  }

  // State management
  const selectedJob = ref<Job | null>(null);
  const showApplicationForm = ref(false);

  // Application form data
  interface Application {
    fullName: string;
    email: string;
    phone: string;
    resume: File | null;
  }

  const application = reactive<Application>({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
  });

  // Functions
  const selectJob = (job: Job) => {
    selectedJob.value = job;
    showApplicationForm.value = false;

    // Use setTimeout to ensure the DOM has updated before scrolling
    setTimeout(() => {
      const jobDetailsElement = document.querySelector('.job-details');
      if (jobDetailsElement) {
        window.scrollTo({
          top: jobDetailsElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const scrollToApplicationForm = () => {
    // Use setTimeout to ensure the DOM has updated before scrolling
    setTimeout(() => {
      const applicationFormElement = document.querySelector('.application-form');
      if (applicationFormElement) {
        window.scrollTo({
          top: applicationFormElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const fileInput = ref<HTMLInputElement | null>(null);
  const isDragOver = ref(false);

  const triggerFileInput = () => {
    if (fileInput.value) {
      fileInput.value.click();
    }
  };

  const onFileSelected = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      application.resume = input.files[0];
    }
  };

  const onDragOver = () => {
    isDragOver.value = true;
  };

  const onDragLeave = () => {
    isDragOver.value = false;
  };

  const onDrop = (event: DragEvent) => {
    isDragOver.value = false;
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      const validExtensions = [".pdf", ".doc", ".docx"];
      const fileExtension = "."+file.name.split(".").pop()?.toLowerCase();

      if (validExtensions.includes(fileExtension)) {
        application.resume = file;
      } else {
        alert("Please upload a PDF, DOC, or DOCX file.");
      }
    }
  };

  const removeFile = () => {
    application.resume = null;
    if (fileInput.value) {
      fileInput.value.value = "";
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const submitApplication = () => {
    if (!selectedJob.value) return;

    // In a real application, you would send this data to your server
    console.log("Application submitted:", {
      job: selectedJob.value.title,
      ...application
    });

    // Show success message and reset form
    alert("Your application has been submitted successfully!");
    cancelApplication();
  };

  const cancelApplication = () => {
    showApplicationForm.value = false;
    // Reset form fields
    application.fullName = "";
    application.email = "";
    application.phone = "";
    application.resume = null;
  };
</script>

<style scoped lang="scss">
  // 1. Primary Colors:
  $--primary-1: #4b4b4b;
  $--primary-2: #2c2c2c;
  $--primary-3: #1c2a3e;

  // 2. Accent Colors:
  $--accent-1: #253472;
  $--accent-2: #ffc300;
  $--accent-3: #2ecc71;

  // 3. Neutral Colors:
  $--neutral-1: hsl(0, 0%, 90%);
  $--neutral-2: hsl(0, 0%, 95%);

  .careers-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8rem 0 4rem 0;

    .hero-banner {
      position: relative;
      height: 300px;
      background-image: url('/careers-banner.jpg');
      background-size: cover;
      background-position: center;

      .overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        text-align: center;

        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-family: "Oswald";
          letter-spacing: 1px;
        }

        p {
          font-size: 1.5rem;
          font-family: "RobotoFlex";
        }
      }
    }

    .content-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;

      section {
        margin-bottom: 3rem;

        h2 {
          font-size: 2rem;
          color: $--primary-3;
          margin-bottom: 1.5rem;
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
      }

      .company-description {
        p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: $--primary-1;
          font-family: "RobotoFlex";
        }
      }

      .benefits-container {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;

        .benefit-card {
          flex: 1 1 200px;
          max-width: 300px;
          padding: 1.5rem;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;

          &:hover {
            transform: translateY(-5px);
          }

          .benefit-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $--accent-3;
            border-radius: 50%;
            color: white;

            svg {
              width: 30px;
              height: 30px;
            }
          }

          h3 {
            font-size: 1.2rem;
            color: $--primary-3;
            margin-bottom: 0.5rem;
            font-family: "Oswald";
          }

          p {
            font-size: 0.9rem;
            color: $--primary-1;
            font-family: "RobotoFlex";
          }
        }
      }

      .jobs-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;

        .job-card {
          flex: 1 1 300px;
          padding: 1.5rem;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border-left: 4px solid $--accent-2;

          &:hover {
            transform: translateY(-5px);
          }

          &.active {
            border-left-color: $--accent-3;
          }

          h3 {
            font-size: 1.3rem;
            color: $--primary-3;
            margin-bottom: 0.5rem;
            font-family: "Oswald";
          }

          .job-location {
            font-size: 0.9rem;
            color: $--primary-1;
            margin-bottom: 1rem;
            font-family: "RobotoFlex";
          }

          .view-details-btn {
            padding: 0.5rem 1rem;
            background-color: $--accent-1;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-family: "RobotoFlex";
            transition: background-color 0.3s ease;

            &:hover {
              background-color: darken($--accent-1, 10%);
            }
          }
        }
      }

      .job-details {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;

        h2 {
          color: $--primary-3;
          margin-bottom: 0.5rem;
        }

        .job-location {
          font-size: 1rem;
          color: $--primary-1;
          margin-bottom: 1.5rem;
          font-family: "RobotoFlex";
        }

        .job-info {
          h3 {
            font-size: 1.2rem;
            color: $--primary-3;
            margin: 1.5rem 0 0.5rem;
            font-family: "Oswald";
          }

          p {
            font-size: 1rem;
            line-height: 1.6;
            color: $--primary-1;
            font-family: "RobotoFlex";
          }

          ul {
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;

            li {
              margin-bottom: 0.5rem;
              font-family: "RobotoFlex";
              color: $--primary-1;
            }
          }

          .apply-btn {
            padding: 0.75rem 1.5rem;
            background-color: $--accent-3;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-family: "RobotoFlex";
            font-size: 1rem;
            transition: background-color 0.3s ease;

            &:hover {
              background-color: darken($--accent-3, 10%);
            }
          }
        }
      }

      .application-form {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;

        h2 {
          color: $--primary-3;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;

          :deep(.p-inputtext), :deep(.p-inputmask), :deep(.p-inputtextarea) {
            width: 100%;
            padding: 0.75rem;
            font-family: "RobotoFlex";
            border: 1px solid #ced4da;
            border-radius: 4px;
            transition: border-color 0.2s;

            &:focus {
              border-color: $--accent-1;
              outline: none;
              box-shadow: 0 0 0 2px rgba(37, 52, 114, 0.2);
            }
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

          :deep(.p-float-label input:focus) ~ label,
          :deep(.p-float-label input.p-filled) ~ label,
          :deep(.p-float-label textarea:focus) ~ label,
          :deep(.p-float-label textarea.p-filled) ~ label {
            top: -0.75rem;
            font-size: 0.75rem;
            transform: translateY(0);
            background-color: white;
            padding: 0 0.25rem;
          }
        }

        .resume-upload {
          label {
            display: block;
            margin-bottom: 0.5rem;
            font-family: "RobotoFlex";
            color: $--primary-3;
          }

          .custom-file-upload {
            padding: 2rem;
            border: 2px dashed #ced4da;
            border-radius: 4px;
            background-color: #f8f9fa;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            min-height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;

            &:hover, &.drag-over {
              border-color: $--accent-1;
              background-color: rgba(37, 52, 114, 0.05);
            }

            .upload-icon {
              margin-bottom: 1rem;
              color: $--accent-1;
            }

            .upload-text {
              p {
                margin: 0.5rem 0;
                color: #666;
                font-size: 1rem;
              }

              .browse-button {
                display: inline-block;
                background-color: $--accent-1;
                color: white;
                padding: 0.5rem 1.5rem;
                border-radius: 4px;
                margin-top: 1rem;
                font-weight: 500;
                transition: background-color 0.2s;

                &:hover {
                  background-color: darken($--accent-1, 10%);
                }
              }
            }

            .file-info {
              width: 100%;

              .file-name {
                font-weight: 500;
                color: $--primary-1;
                margin-bottom: 0.25rem;
                word-break: break-all;
              }

              .file-size {
                color: #666;
                font-size: 0.9rem;
                margin-bottom: 1rem;
              }

              .remove-file {
                background-color: #f44336;
                color: white;
                border: none;
                padding: 0.4rem 1rem;
                border-radius: 4px;
                cursor: pointer;
                font-family: "RobotoFlex";
                transition: background-color 0.2s;

                &:hover {
                  background-color: darken(#f44336, 10%);
                }
              }
            }
          }
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;

          button {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-family: "RobotoFlex";
            font-size: 1rem;
            transition: background-color 0.3s ease;
          }

          .cancel-btn {
            background-color: #f1f1f1;
            color: $--primary-1;

            &:hover {
              background-color: darken(#f1f1f1, 10%);
            }
          }

          .submit-btn {
            background-color: $--accent-3;
            color: white;

            &:hover {
              background-color: darken($--accent-3, 10%);
            }
          }
        }
      }
    }

    // Responsive adjustments
    @media (max-width: 768px) {
      .hero-banner {
        height: 200px;

        .overlay {
          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }

      .content-container {
        padding: 1rem;

        .benefits-container {
          .benefit-card {
            flex: 1 1 100%;
            max-width: 100%;
          }
        }

        .jobs-container {
          .job-card {
            flex: 1 1 100%;
          }
        }
      }
    }
  }
</style>
