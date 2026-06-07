import * as yup from "yup";

export const parkOfficerValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters")
    .required(),
  badgeNumber: yup.string().trim().required(),
  district: yup
    .string()
    .trim()
    .min(5, "District must be at least 5 characters")
    .required(),
});
