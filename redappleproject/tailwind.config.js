export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lora:['Lora','sans'],
        Poppins:['Poppins', 'sans-serif'],
        Forum:['Forum']
      },
      screens:{
        vsm:"320px",
        ssm:"400px",
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px"
      },
    },
  },
  plugins: [],
}