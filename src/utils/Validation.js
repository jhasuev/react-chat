export default class Validation {
  isFieldValidate(fieldName, rules) {
    const rule = rules[fieldName]
    const fieldLabel = rule?.fieldLabel ?? fieldName
    let val = rule?.field

    if ('trim' in rule) {
      val = val.trim()
    }

    if (rule?.required && !val) {
      return `'${fieldLabel}' is required`
    }

    if ('min' in rule && val?.length < rule?.min) {
      return `'${fieldLabel}' must be more or equal to '${rule?.min}' symbols`
    }

    if ('max' in rule && val?.length > rule?.max) {
      return `'${fieldLabel}' must be less or equal to '${rule?.max}' symbols`
    }

    if ('sameAs' in rule && val !== rule?.sameAs) {
      return `'${fieldLabel}' must be same as '${rule?.sameAsFieldLabel}'`
    }

    return ''
  }

  checkFields(fieldNames, { errors, rules }) {
    const checkingFields = Array.isArray(fieldNames) ? fieldNames : [fieldNames]
    const fieldErrors = { ...errors }

    checkingFields.forEach((fieldName) => {
      fieldErrors[fieldName] = this.isFieldValidate(fieldName, rules)
    })

    return {
      valid: Object.values(fieldErrors).every(v => !v),
      errors: fieldErrors,
    }
  }
}