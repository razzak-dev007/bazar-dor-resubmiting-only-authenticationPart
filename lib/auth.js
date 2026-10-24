import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    passwordValidator: (pass) => {
      var hasNum = false;
      var hasLet = false;

      for (var i = 0; i < pass.length; i++) {
        var char = pass[i];
        if (char >= '0' && char <= '9') {
          hasNum = true;
        }
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
          hasLet = true;
        }
      }

      if (hasNum && hasLet) {
        return true;
      }
      return "পাসওয়ার্ড ৮ অক্ষরের হতে হবে এবং সংখ্যা আর অক্ষর মিলায়ে দিতে হবে";
    },
  },
});
