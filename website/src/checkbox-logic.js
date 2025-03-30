// Custom checkbox logic for the service form
// This handles the "Anytime" checkbox behavior

export function setupCheckboxLogic(formData) {
  // Watch for changes to preferredTimes array
  const handlePreferredTimesChange = (newValue) => {
    // If "Anytime" is selected, uncheck all other options
    if (newValue.includes("Anytime")) {
      // If there are other options selected besides "Anytime", remove "Anytime"
      if (newValue.length > 1) {
        formData.preferredTimes = newValue.filter(time => time !== "Anytime");
      } else {
        // If "Anytime" is the only option selected, keep only "Anytime"
        formData.preferredTimes = ["Anytime"];
      }
    }
  };

  return {
    handlePreferredTimesChange
  };
}
