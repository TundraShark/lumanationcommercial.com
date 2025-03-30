<template>
  <div class="projects">
    <div class="title-green">Our Projects</div>
    <div class="projects-container">
      <div v-for="project in projects" :key="project.name" class="project">
        <div class="image">
          <img :src="project.imageUrl">
        </div>
        <div class="content">
          <div class="title">{{ project.name }}</div>
          <div class="project-details">
            <p><strong>Category:</strong> {{ project.category }}</p>
            <p><strong>Description:</strong> {{ project.description }}</p>
            <p><strong>Address:</strong> {{ project.address }}</p>
            <p><strong>Project Budget:</strong> {{ formatCurrency(project.budget) }}</p>
            <p><strong>Square Footage:</strong> {{ formatNumber(project.squareFootage) }} sq ft</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    data() {
      return {
        projects: [
          {
            name: "BMW McKinney",
            category: "Automotive Facility",
            description: "Complete electrical installation for a state-of-the-art BMW dealership, including showroom lighting, service bay power systems, and smart building controls for optimal energy efficiency.",
            address: "2950 S Central Expy, McKinney, TX 75070",
            budget: 1250000,
            squareFootage: 65000,
            imageUrl: "/projects/bmw-mckinney.jpg"
          },
          {
            name: "Wash Masters - Lynn Creek",
            category: "Retail & Automotive",
            description: "Installation of electrical systems for a 6,000 sq. ft. Gateway store with Dunkin' Donuts and Jimmy John's, including custom lighting, beer cave, fuel dispensers, and a 6,400 sq. ft. car wash facility with automated tunnel and vacuum systems.",
            address: "2425 N Belt Line Rd, Grand Prairie, TX 75050",
            budget: 875000,
            squareFootage: 12400,
            imageUrl: "/projects/washmasters.jpg"
          },
          {
            name: "Haven Apartments",
            category: "Multi-Family Residential",
            description: "Comprehensive electrical infrastructure installation for a modern apartment complex, featuring smart home integration, energy-efficient lighting systems, and secure access controls.",
            address: "4701 Charles Place, Plano, TX 75093",
            budget: 2100000,
            squareFootage: 180000,
            imageUrl: "/projects/project-5.jpg"
          },
          {
            name: "Goddard Princeton",
            category: "Educational Facility",
            description: "Installation of advanced electrical systems for an early childhood education center, including classroom lighting, security systems, and playground area illumination with focus on safety and energy efficiency.",
            address: "1081 E Princeton Dr, Princeton, TX 75407",
            budget: 450000,
            squareFootage: 15000,
            imageUrl: "/projects/goddard-school-princeton.jpg"
          },
          {
            name: "Prosper Campus",
            category: "Commercial Office",
            description: "Design and installation of electrical systems for a modern office campus, incorporating sustainable lighting solutions, power distribution systems, and smart building automation.",
            address: "2001 E Prosper Trail, Prosper, TX 75078",
            budget: 1850000,
            squareFootage: 85000,
            imageUrl: "/projects/prosper-campus.png"
          },
          {
            name: "Urban Garages - McKinney",
            category: "Commercial Development",
            description: "Installation of electrical infrastructure for four commercial buildings, including 800-amp services, site lighting, 200-amp panels per unit, HVAC wiring, and fire safety systems.",
            address: "1620 N McDonald St, McKinney, TX 75071",
            budget: 925000,
            squareFootage: 48000,
            imageUrl: "/projects/urban-garages-mckinney.jpg"
          }
        ]
      };
    },
    methods: {
      formatCurrency(value: number): string {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(value);
      },
      formatNumber(value: number): string {
        return new Intl.NumberFormat("en-US").format(value);
      }
    }
  });
</script>

<style scoped lang="scss">
  $--primary-1: #4b4b4b;
  $--primary-2: #2c2c2c;
  $--primary-3: #1c2a3e;
  $--accent-1: #253472;
  $--accent-2: #ffc300;
  $--accent-3: #2ecc71;
  $--neutral-1: hsl(0, 0%, 90%);
  $--neutral-2: hsl(0, 0%, 95%);

  .projects {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 100px);
    width: 100%;
    padding: 8rem 0 4rem 0;
    background-color: $--neutral-2;

    .title-green {
      color: $--accent-3;
      font-size: 2.5rem;
      font-weight: bold;
      font-family: "Oswald";
      text-align: center;
      margin-bottom: 3rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;

    .project {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 2rem;
      background-color: $--primary-3;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      width: 100%;

      > .image {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: 400px;
        overflow: hidden;

        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px 8px 0 0;
        }
      }

      > .title {
        display: flex;
        margin: 8px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: "Oswald";
        color: $--accent-3;
      }

      > .description {
        display: flex;
        flex-grow: 1;
        text-align: center;
        padding: 0 16px 16px 16px;
        font-family: "RobotoFlex";
      }

      .content {
        display: flex;
        flex-direction: column;
        padding: 2rem;

        .title {
          color: $--accent-3;
          font-size: 2rem;
          font-weight: bold;
          font-family: "Oswald";
          margin-bottom: 1.5rem;
        }

        .project-details {
          color: $--neutral-1;
          font-family: "RobotoFlex";

          p {
            margin-bottom: 0.75rem;
            line-height: 1.4;

            &:last-child {
              margin-bottom: 0;
            }

            strong {
              color: $--accent-2;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .project {
      grid-template-columns: 1fr !important;

      .image {
        min-height: 300px;
      }

      .content {
        padding: 1.5rem;

        .title {
          font-size: 1.75rem;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .projects {
      padding: 2rem 0;
    }

    .projects-container {
      gap: 2rem;
      padding: 0 1rem;
    }

    .project .content {
      padding: 1rem;
    }
  }
</style>
