import React from 'react'
import styles from "@/components/layout/OrderSummary/style.module.css"

const OrderSummary = () => {
  return (
    <div>
        <h2>Resumo do pedido</h2>
        <image>imagem</image>

        <p>Mouse Gamer Redragon</p>
        <p>R$15,22 </p>

        <p>item menos 2 mais</p>

        <input type="text" placeholder='cupom de desconto' />
        <button>aplicar</button>

        <p>Taxa</p>
        <p>R$3,45</p>
        <p>envio</p>
        <p>grátis</p>
        <p>total</p>
        <p>R$30,44</p>
    </div>
  )
}

export default OrderSummary