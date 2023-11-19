import CPF from "./cpf"
import RG from "./rg"
import Telefone from "./telefone"
import Pet from "./pet"
import ProdutoConsumido from "./produtoConsumidos"
import ServicoConsumido from "./servicoConsumidos"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<ProdutoConsumido>
    private servicosConsumidos: Array<ServicoConsumido>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public set setCPF(novoCPF: CPF){
        this.cpf=novoCPF
    }
    public setRg(novoRG: RG, localRg: number){
        this.rgs[localRg]=novoRG
    }
    public setTelefone(novoTelefone: Telefone, localTelefone: number){
        this.telefones[localTelefone]=novoTelefone
    }
    public setPet(novoPet: Pet, localPet: number){
        this.pets[localPet]=novoPet
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<ProdutoConsumido> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<ServicoConsumido> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
}