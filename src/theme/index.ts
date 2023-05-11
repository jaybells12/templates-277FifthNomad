import { extendTheme } from "@chakra-ui/react"

//Color Tokens
import colors from "./colors"

//Custom fonts
import fonts from "./fonts"

//Global Styling
import styles from "./styles"

//Component Styling
import Button from "./components/Button"
import Card from "./components/Card"
import Circle from "./components/Circle"
import Container from "./components/Container"
import Controls from "./components/Controls"
import Form from "./components/Form"
import FormLabel from "./components/FormLabel"
import Heading from "./components/Heading"
import Input from "./components/Input"
import Link from "./components/Link"
import Radio from "./components/Radio"
import Select from "./components/Select"
import Table from "./components/Table"
import Text from "./components/Text"

const overrides = {
  colors,
  fonts,
  styles,
  components: {
    Button,
    Card,
    Circle,
    Container,
    Controls,
    Form,
    FormLabel,
    Heading,
    Input,
    Link,
    Radio,
    Select,
    Table,
    Text
  }
}

export default extendTheme(overrides)