import { StyleSheet } from "react-native";

export interface ColoresTema {
  primario: string;
  texto: string;
  fondo: string;
  TarjetaFondo: string;
  Colorfondo: string;
  btnColorTexto: string,
}



export const ColoresClaro: ColoresTema = {
  primario: "#5856D6",
  texto: "black",

  fondo: "#F3F2F7",
  TarjetaFondo: "white",
  Colorfondo: "white",
  btnColorTexto: "white",
};

export const ColoresOscuro: ColoresTema = {
  primario: '#5856D6',
  texto: 'white',

  fondo: '#090909',
  TarjetaFondo: '#2d2d2d',
  Colorfondo: 'white',
  btnColorTexto: "white",
}




export const EstiloGlobales = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "bold",

  },
  subTitulo: {
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
   
  },

  mainContainer: {
    flex: 1,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnprimario: {
   
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  btnprimarioText: {
   
    fontSize: 16,
  },
});