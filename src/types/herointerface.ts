export interface IHero {
    id: number;
    icon: string;
    agi_gain: number,
    attack_range: number,
    attack_rate: number,
    attack_type: string,
    base_agi: number,
    base_armor: number,
    base_attack_max: number,
    base_attack_min: number,
    base_health: number,
    base_health_regen: number,
    base_int: number,
    base_mana: number,
    base_mana_regen: number,
    base_mr: number,
    base_str: number,
    cm_enabled: boolean,
    img: string,
    localized_name:string,
    move_speed: number,
    primary_attr: string,
    roles:Array,
    str_gain: number,
    legs:number


}