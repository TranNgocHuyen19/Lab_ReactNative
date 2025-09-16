import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const COLOR = {
  bg: "#CFCFE6",
  panel: "#252a5a",
  panelDark: "#1f2348",
  accent: "#5C6AC4",
  white: "#FFFFFF",
  text: "#EAEAF4",
  shadow: "#15193a",
  border: "#E5E7EB",
};

const CHARSETS = [
  { key: "lower", chars: "abcdefghijklmnopqrstuvwxyz" },
  { key: "upper", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { key: "number", chars: "0123456789" },
  { key: "special", chars: "!@#$%^&*()-_=+[]{};:,.<>?/\\|" },
];

const pickRandom = (str) => str[Math.floor(Math.random() * str.length)];

const generatePassword = (length, opts) => {
  const enabled = CHARSETS.filter((s) => opts[s.key]);
  if (enabled.length === 0) return "";

  const guarantee = enabled.map((s) => pickRandom(s.chars));

  const pool = enabled.map((s) => s.chars).join("");
  const remaining = Math.max(0, length - guarantee.length);
  const rest = Array.from({ length: remaining }, () => pickRandom(pool));

  const arr = [...guarantee, ...rest];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
};

const Checkbox = ({ checked, onToggle }) => (
  <TouchableOpacity onPress={onToggle} activeOpacity={0.8}>
    <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
      {checked ? <Text style={styles.checkmark}>✓</Text> : null}
    </View>
  </TouchableOpacity>
);

export default function Screen02() {
  const [lengthStr, setLengthStr] = useState("12");
  const [opts, setOpts] = useState({
    lower: true,
    upper: false,
    number: true,
    special: false,
  });
  const [password, setPassword] = useState("");

  const lengthNum = useMemo(() => {
    const n = parseInt(lengthStr, 10);
    return Number.isNaN(n) ? 0 : n;
  }, [lengthStr]);

  const toggle = (key) => setOpts((p) => ({ ...p, [key]: !p[key] }));

  const onGenerate = () => {
    if (lengthNum < 4 || lengthNum > 64) {
      Alert.alert("Lỗi", "Độ dài nên từ 4 đến 64 ký tự.");
      return;
    }
    if (!opts.lower && !opts.upper && !opts.number && !opts.special) {
      Alert.alert("Lỗi", "Chọn ít nhất một nhóm ký tự.");
      return;
    }
    setPassword(generatePassword(lengthNum, opts));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>
          <Text style={styles.titleUnderline}>PASSWORD{"\n"}GENERATOR</Text>
        </Text>

        <View style={styles.passwordBox}>
          <Text
            style={styles.passwordText}
            numberOfLines={1}
            ellipsizeMode="middle"
          >
            {password || " "}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Password length</Text>
          <TextInput
            style={styles.lengthInput}
            value={lengthStr}
            onChangeText={setLengthStr}
            keyboardType="number-pad"
            maxLength={2}
            placeholder="12"
            placeholderTextColor="#9AA0B6"
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Include lower case letters</Text>
          <Checkbox checked={opts.lower} onToggle={() => toggle("lower")} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Include upcase letters</Text>
          <Checkbox checked={opts.upper} onToggle={() => toggle("upper")} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Include number</Text>
          <Checkbox checked={opts.number} onToggle={() => toggle("number")} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Include special symbol</Text>
          <Checkbox checked={opts.special} onToggle={() => toggle("special")} />
        </View>

        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.9}
          onPress={onGenerate}
        >
          <Text style={styles.btnText}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLOR.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "88%",
    maxWidth: 420,
    backgroundColor: COLOR.panel,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#3b3f75",
    shadowColor: COLOR.shadow,
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 8,
    height: "88%",
  },
  title: {
    color: COLOR.white,
    fontWeight: "800",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 18,
  },
  titleUnderline: { textDecorationLine: "underline" },
  passwordBox: {
    height: 48,
    backgroundColor: COLOR.panelDark,
    borderRadius: 6,
    marginBottom: 18,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  passwordText: {
    color: COLOR.white,
    fontSize: 18,
    letterSpacing: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  label: {
    color: COLOR.text,
    fontSize: 16,
    fontWeight: "700",
    flexShrink: 1,
    paddingRight: 10,
  },
  lengthInput: {
    width: 100,
    height: 40,
    backgroundColor: COLOR.white,
    borderRadius: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLOR.border,
    color: "#111827",
    fontWeight: "700",
    textAlign: "center",
  },
  checkbox: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: COLOR.white,
    backgroundColor: COLOR.white,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: { backgroundColor: COLOR.white },
  checkmark: { color: "#000", fontSize: 20, lineHeight: 20, fontWeight: "800" },
  btn: {
    marginTop: 20,
    height: 48,
    borderRadius: 8,
    backgroundColor: COLOR.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: COLOR.white,
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.4,
  },
});
