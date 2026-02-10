<script>
/* ===== CMBOOKS BUSINESS RULES ===== */

const BUSINESS_RULES = {
  service: {
    inventory: false,
    manufacturing: false,
    purchase: false
  },
  trading: {
    inventory: true,
    manufacturing: false,
    purchase: true
  },
  manufacturing: {
    inventory: true,
    manufacturing: true,
    purchase: true
  }
};
</script>
